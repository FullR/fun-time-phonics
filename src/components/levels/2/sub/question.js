import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import soundContext from "decorators/sound-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";

@animationContext
export default class Lesson2SubQuestion extends React.Component {
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
        choices[i.toString()] = {
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations, words, exampleWords} = this.props;
    animations.create("instructions",
      this::hideChoices,
      center.bind(this, "teacher"),

      this::say("teacher", "teacher/touch-the-word"),
      200,
      this::say("teacher", `teacher/${exampleWords[0]}`),
      200,
      this::say("teacher", "teacher/and"),
      200,
      this::say("teacher", `teacher/${exampleWords[1]}`),
      600,
      uncenter.bind(this, "teacher"),
      revealChoice.bind(this, 0),
      this::say("teacher", `teacher/${words[0]}`),
      400,
      revealChoice.bind(this, 1),
      this::say("teacher", `teacher/${words[1]}`),
      400,
      revealChoice.bind(this, 2),
      this::say("teacher", `teacher/${words[2]}`),
      500,
      endSpeaking.bind(this, "teacher")
    );

    animations.create("words-only",
      this::hideChoices,
      uncenter.bind(this, "teacher"),
      revealChoice.bind(this, 0),
      this::say("teacher", `teacher/${words[0]}`),
      400,
      revealChoice.bind(this, 1),
      this::say("teacher", `teacher/${words[1]}`),
      400,
      revealChoice.bind(this, 2),
      this::say("teacher", `teacher/${words[2]}`),
      500,
      endSpeaking.bind(this, "teacher")
    );

    if(this.props.wordsOnly) {
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
          {map(choices, (choice, i) =>
            <Choice {...choice} key={i}>
              <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]} onClick={() => onAnswer(parseInt(i))}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
