import React from "react";
import Belt from "components/belt";
import Letter from "components/letter";
import WordLesson from "components/word-lesson";
import LetterIntro from "./letter-intro";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";


function lessonAnim() {
  const {animations, letter} = this.props;
  const words = Object.keys(this.state.choices);

  return [
    this::hideChoices,

    this::say("owl", "owl/words-like"),
    words.map((word) => [
      300,
      revealChoice.bind(this, word),
      this::say("owl", `owl/${word}`)
    ]),
    this::say("owl", "owl/all-begin-with-the"),
    this::say("owl", "owl/phonic", 200),
    this::say("owl", "owl/sound", 200),
    this::say("owl", "owl/when-we-read-the-letters", 200),
    this::say("owl", "owl/letters", 200),
    this::say("owl", "owl/they-tell-us-to-say", 200),
    this::say("owl", "owl/phonic", 200),
    this::say("owl", "owl/touch-the", 200),

    endSpeaking.bind(this, "owl")
  ];
}

export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingLetterIntro: props.letterIntro
    };
  }

  hideLetterIntro() {
    this.setState({showingLetterIntro: false});
  }

  render() {
    const {letter, lessonWords, exampleWords} = this.props;
    const {showingLetterIntro} = this.state;

    if(showingLetterIntro) {
      return (<LetterIntro {...this.props} words={exampleWords} onComplete={::this.hideLetterIntro}/>);
    }

    return (
      <WordLesson {...this.props} animation={lessonAnim} words={lessonWords}>
        <Belt top="10%">
          <Letter>{letter.toUpperCase()}{letter}</Letter>
        </Belt>
      </WordLesson>
    );
  }
}
