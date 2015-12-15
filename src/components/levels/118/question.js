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
      teacher: {text: "Instructions", centered: false, speaking: true},
      owl: {text: "Lesson"},
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
      hideChoices.bind(this),
      center.bind(this, "teacher"),
      this::say("teacher", "teacher/touch-the-word-that-ends-with-the"),
      300,
      this::say("teacher", "teacher/letter"),
      300,
      this::say("teacher", "teacher/sound"),
      uncenter.bind(this, "teacher"),
      ...words.map((word, i) => [
        300,
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`)
      ]),

      endSpeaking.bind(this, "teacher")
    );

    if(soundsOnly) {
      animations.create("sounds-only",
        this::hideChoices,
        ...words.map((word) => [
          300,
          revealChoice.bind(this, word),
          this::say("teacher", `teacher/${word}`)
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
    const {onAnswer, sounds} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]} onClick={() => onAnswer(choice)}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
