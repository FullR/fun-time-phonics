import React from "react";
import WordLesson from "components/word-lesson";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function animation() {
  return [
    this::hideChoices,
    center.bind(this, "owl"),
    this::say("owl", "owl/the-first-sound"),

    this::say("owl", "owl/the-beginning-sound", 300),
    uncenter.bind(this, "owl"),
    revealChoice.bind(this, "cat"),
    this::say("owl", "owl/cat"),
    this::say("owl", "owl/is", 300),
    this::say("owl", "owl/k", 300),

    this::say("owl", "owl/the-last-sound", 300),
    this::say("owl", "owl/the-ending-sound", 300),
    this::say("owl", "owl/cat", 300),
    this::say("owl", "owl/is", 300),
    this::say("owl", "owl/t", 300),
    this::say("owl", "owl/say-the", 300),
    this::say("owl", "owl/cat", 300),
    this::say("owl", "owl/then-touch", 300),

    endSpeaking.bind(this, "owl")
  ];
}

export default class Lesson extends React.Component {
  render() {
    return (
      <WordLesson {...this.props}
        number={3}
        activityCount={24}
        title="Beginning and Ending Sounds"
        words={["cat"]}
        animation={animation}
      />
    );
  }
}
