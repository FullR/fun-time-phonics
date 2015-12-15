import React from "react";
import WordLesson from "components/word-lesson";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function animation() {
  return [
    this::hideChoices,
    center.bind(this, "owl"),
    this::say("owl", "owl/the-last-sound"),
    500,
    this::say("owl", "owl/the-ending-sound", 500),
    300,
    uncenter.bind(this, "owl"),
    revealChoice.bind(this, "hot"),
    this::say("owl", "owl/hot"),
    400,
    revealChoice.bind(this, "bat"),
    this::say("owl", "owl/bat"),
    400,
    revealChoice.bind(this, "sit"),
    this::say("owl", "owl/sit"),
    this::say("owl", "owl/is", 300),
    this::say("owl", "owl/t", 300),
    this::say("owl", "owl/say-the-words", 600),
    this::say("owl", "owl/hot", 300),
    this::say("owl", "owl/bat", 400),
    this::say("owl", "owl/sit", 400),
    this::say("owl", "owl/slowly", 300),
    this::say("owl", "owl/then-touch", 600),
    endSpeaking.bind(this, "owl")
  ];
}

export default class Lesson extends React.Component {
  render() {
    return (
      <WordLesson {...this.props}
        number={2}
        activityCount={15}
        title="Ending Sounds"
        words={["hot", "bat", "sit"]}
        animation={animation}
      />
    );
  }
}
