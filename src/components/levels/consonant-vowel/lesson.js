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
  render() {
    const {letter, lessonWords, exampleWords, onComplete, arrowLabel} = this.props;

    return (
      <WordLesson {...this.props} animation={lessonAnim} words={lessonWords.concat(exampleWords)}>
        <Belt top="10%">
          <Letter>{letter.toUpperCase()}<span style={{fontSize: "80%"}}>{letter}</span></Letter>
        </Belt>
      </WordLesson>
    );
  }
}
