import React from "react";
import Belt from "components/belt";
import Letter from "components/letter";
import WordLesson from "components/word-lesson";
import LetterIntro from "./letter-intro";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter, detachChoices, attachChoices} from "helpers/animation";

function lessonAnim() {
  const {animations, letter, letterIntro, lessonWords, exampleWords} = this.props;
  const words = Object.keys(this.state.choices);

  return [
    this::hideChoices,
    letterIntro ? [
      () => this.props.hideVowel(),
      () => attachChoices.apply(this, exampleWords),
      () => detachChoices.apply(this, lessonWords),
      this::say("owl", "owl/the-letter"),
      this::say("owl", "owl/letter", 100),
      this::say("owl", "owl/looks-like-this", 200),
      this::say("owl", "owl/the-letter", 400),
      this::say("owl", "owl/letter", 100),
      this::say("owl", "owl/makes-the-beginning-sound-of", 200),
      ...exampleWords.map((word) => [
        300,
        revealChoice.bind(this, word),
        this::say("owl", `owl/${word}`)
      ]),
      500,
    ] : null,

    () => detachChoices.apply(this, exampleWords),
    () => attachChoices.apply(this, lessonWords),
    () => hideChoices.apply(this, exampleWords),
    () => this.props.showVowel(),
    this::say("owl", "owl/words-such-as"),
    lessonWords.map((word) => [
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
    this.state = {showingVowel: !props.letterIntro};
  }

  showVowel() {
    this.setState({showingVowel: true});
  }

  hideVowel() {
    this.setState({showingVowel: false});
  }

  render() {
    const {letter, vowel, lessonWords, exampleWords, onComplete, arrowLabel} = this.props;
    const {showingVowel} = this.state;

    return (
      <WordLesson {...this.props}
        animation={lessonAnim}
        words={lessonWords.concat(exampleWords)}
        showVowel={this.showVowel.bind(this)}
        hideVowel={this.hideVowel.bind(this)}
      >
        <Belt top="10%">
          {showingVowel ?
            <Letter>{letter}<span style={{fontSize: "80%"}}>{vowel}</span></Letter> :
            <Letter>{letter.toUpperCase()}{letter}</Letter>
          }
        </Belt>
      </WordLesson>
    );
  }
}
