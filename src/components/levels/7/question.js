import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter, enableGlow, disableGlow} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";

const phonicStyle = {
  fontSize: 40,
  margin: "0 10px 0 10px"
};
class Phonic extends React.Component {
  render() {
    return (<span style={phonicStyle}>/{this.props.children}/</span>);
  }
}

@animationContext
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {text: "Instructions", centered: props.wordsOnly, speaking: props.wordsOnly, glowing: props.wordsOnly},
      owl: {text: "Lesson", hidden: true},
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
      this::say("teacher", "teacher/say-the-word-the-same-way-i-say-it-then-touch-its-picture"),
      this::say("teacher", "teacher/sounded-parts", 300),
      uncenter.bind(this, "teacher"),
      ...words.map((word) => [
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ]),
      enableGlow.bind(this, "teacher"),
      endSpeaking.bind(this, "teacher")
    );

    animations.create("words-only",
      this::hideChoices,
      center.bind(this, "teacher"),
      250,
      this::say("teacher", "teacher/sounded-parts"),
      uncenter.bind(this, "teacher"),
      ...words.map((word) => [
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ]),
      endSpeaking.bind(this, "teacher")
    );

    if(wordsOnly) {
      animations.start("words-only");
    } else {
      animations.start("instructions");
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  render() {
    const {onAnswer, sounds, phonics} = this.props;
    const {choices, teacher, owl} = this.state;

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
