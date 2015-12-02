import React from "react";
import Belt from "components/belt";
import Letter from "components/letter";
import WordLesson from "components/word-lesson";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function letterIntroAnim({letter, words}) {
  return [
    this::say("owl", "owl/the-letter"),
    this::say("owl", "owl/letter", 100),
    this::say("owl", "owl/looks-like-this", 200),
    this::say("owl", "owl/the-letter", 400),
    this::say("owl", "owl/letter", 100),
    this::say("owl", "owl/makes-the-beginning-sound-of", 200),
    ...words.map((word) => [
      300,
      this::say("owl", `owl/${word}`)
    ]),
    500
  ];
}

function lessonAnim() {
  const {animations, letterIntro, letter, exampleWords} = this.props;
  const words = Object.keys(this.state.choices);

  return [
    this::hideChoices,
    letterIntro ?
      this::letterIntroAnim({letter, words: exampleWords}) :
      null,

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
  render() {
    const {number, title, activityCount, letter, lessonWords, sounds, arrowLabel, onComplete} = this.props;

    return (
      <WordLesson {...this.props} animation={lessonAnim} words={lessonWords}>
        <Belt top="10%">
          <Letter>{letter.toUpperCase()}{letter}</Letter>
        </Belt>
      </WordLesson>
    );
  }
}
