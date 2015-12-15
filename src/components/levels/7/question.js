import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
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
      teacher: {text: "instructions", centered: props.wordsOnly, speaking: props.wordsOnly},
      owl: {text: "lesson", centered: !props.wordsOnly, speaking: !props.wordsOnly},
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
      center.bind(this, "owl"),
      this::say("owl", "owl/say-the"),
      uncenter.bind(this, "owl"),
      endSpeaking.bind(this, "owl"),
      center.bind(this, "teacher"),
      this::say("teacher", "teacher/sounded-parts", 300),
      uncenter.bind(this, "teacher"),
      ...words.map((word) => [
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ]),
      endSpeaking.bind(this, "teacher")
    );

    animations.create("words-only",
      this::hideChoices,
      center.bind(this, "teacher"),
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

  sayWord() {
    this.props.animations.start("words-only");
  }

  render() {
    const {onAnswer, sounds, phonics} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.sayWord} onOwlClick={::this.animate}>
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
