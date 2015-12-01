import React from "react";
import WordLesson from "components/word-lesson";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function animation() {

}

export default class Lesson extends React.Component {
  render() {
    return (<WordLesson {...this.props} animation={animation}/>);
  }
}
