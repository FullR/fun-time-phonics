import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";

@animationContext
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    const {wordsOnly} = props;
    this.state = {
      owl: {text: "Lesson"},
      teacher: {
        text: "Instructions",
        speaking: true,
        centered: !wordsOnly,
        animating: false
      },
      choices: props.words.reduce((choices, word, i) => {
        choices[word] = {
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations, words, wordsOnly} = this.props;
    animations.create("instructions",
      this::hideChoices,
      center.bind(this, "teacher"),

      this::say("teacher", "teacher/touch-the-word"),
      400,
      this::say("teacher", "teacher/phonic"),
      600,
      uncenter.bind(this, "teacher"),
      revealChoice.bind(this, words[0]),
      this::say("teacher", `teacher/${words[0]}`),
      400,
      revealChoice.bind(this, words[1]),
      this::say("teacher", `teacher/${words[1]}`),
      400,
      revealChoice.bind(this, words[2]),
      this::say("teacher", `teacher/${words[2]}`),
      endSpeaking.bind(this, "teacher")
    );

    animations.create("words-only",
      this::hideChoices,
      uncenter.bind(this, "teacher"),
      revealChoice.bind(this, words[0]),
      this::say("teacher", `teacher/${words[0]}`),
      400,
      revealChoice.bind(this, words[1]),
      this::say("teacher", `teacher/${words[1]}`),
      400,
      revealChoice.bind(this, words[2]),
      this::say("teacher", `teacher/${words[2]}`),
      endSpeaking.bind(this, "teacher")
    );

    if(wordsOnly) {
      animations.start("words-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  render() {
    const {owl, teacher, choices} = this.state;
    const {words, onAnswer, sounds, animations} = this.props;
    return (
      <GameScreen {...this.props} owl={owl} teacher={teacher} onTeacherClick={::this.animate}>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]} onClick={() => onAnswer({word: choice.word})}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
