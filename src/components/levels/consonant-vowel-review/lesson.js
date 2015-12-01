import React from "react";
import WordLesson from "components/word-lesson";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function animation({words, lessonLetters}) {
  return [
    this::hideChoices,
    center.bind(this, "owl"),
    this::say("owl", "owl/lets-review-the-sounds-we-just-learned"),
    uncenter.bind(this, "owl"),
    200,
    words.map((word, i) => [
      this::say("owl", "owl/the-letters", 200),
      this::say("owl", `owl/${lessonLetters[i]}`, 200),
      this::say("owl", "owl/make-the", 200),
      this::say("owl", `owl/${lessonLetters[i]}h`, 200),
      this::say("owl", "owl/sound-in", 200),
      200,
      revealChoice.bind(this, word),
      this::say("owl", `owl/${word}`)
    ]),
    endSpeaking.bind(this, "owl")
  ];
}

export default class Lesson extends React.Component {
  render() {
    return (<WordLesson {...this.props} scaleChoices={true} animation={animation}/>);
  }
}
