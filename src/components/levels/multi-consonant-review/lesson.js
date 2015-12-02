import React from "react";
import WordLesson from "components/word-lesson";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function animation({words, lessonLetters}) {
  return [
    this::say("owl", "owl/lets-review-all-the-sounds-youve-learned"),
    300,
    this::say("owl", "owl/touch-the")
  ];
}

export default class Lesson extends React.Component {
  render() {
    return (<WordLesson {...this.props} owl={{centered: true}} animation={animation}/>);
  }
}
