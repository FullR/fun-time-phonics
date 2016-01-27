import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";

@animationContext
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {text: "Instructions", centered: !props.wordsOnly, speaking: true, glowing: true},
      owl: {text: "Lesson", hidden: true},
      choices: props.words.reduce((choices, word) => {
        choices[word] = {
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations, words, soundsOnly} = this.props;

    animations.create("instructions",
      this::hideChoices,
      center.bind(this, "teacher"),
      this::say("teacher", "teacher/listen-to"),
      this::say("teacher", "teacher/sounded-parts", 300),
      uncenter.bind(this, "teacher"),
      ...words.map((word, i) => [
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ]),
      endSpeaking.bind(this, "teacher")
    );

    if(soundsOnly) {
      animations.create("sounds-only",
        this::hideChoices,
        this::say("teacher", "teacher/sounded-parts"),
        uncenter.bind(this, "teacher"),
        ...words.map((word) => [
          revealChoice.bind(this, word),
          this::say("teacher", `teacher/${word}`, 300)
        ]),
        endSpeaking.bind(this, "teacher")
      );

      animations.start("sounds-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  render() {
    const {onAnswer, sounds, phonics} = this.props;
    const {choices, teacher, owl, phonicSize} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
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
