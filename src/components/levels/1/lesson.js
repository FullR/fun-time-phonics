import React from "react";
import WordLesson from "components/word-lesson";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function animation() {
  return [
    this::hideChoices,
    center.bind(this, "owl"),
    this::say("owl", "owl/the-first-sound"),
    500,
    this::say("owl", "owl/the-beginning-sound"),
    300,
    uncenter.bind(this, "owl"),
    revealChoice.bind(this, "tail"),
    this::say("owl", "owl/tail"),
    400,
    revealChoice.bind(this, "tip"),
    this::say("owl", "owl/tip"),
    400,
    revealChoice.bind(this, "tape"),
    this::say("owl", "owl/tape"),
    this::say("owl", "owl/is", 300),
    this::say("owl", "owl/t", 300),
    this::say("owl", "owl/say-the-words", 600),
    this::say("owl", "owl/tail", 300),
    this::say("owl", "owl/tip", 400),
    this::say("owl", "owl/tape", 400),
    this::say("owl", "owl/slowly", 300),
    this::say("owl", "owl/then-touch", 600),
    endSpeaking.bind(this, "owl")
  ];
}

export default class Lesson extends React.Component {
  render() {
    return (
      <WordLesson {...this.props}
        number={1}
        activityCount={15}
        title="Beginning Sounds"
        words={["tail", "tip", "tape"]}
        animation={animation}
      />
    );
  }
}
