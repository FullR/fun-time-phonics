import React from "react";
import WordLesson from "components/word-lesson";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function animation() {
  const {animations} = this.props;
  const words = Object.keys(this.state.choices);
  return [
    this::hideChoices,
    center.bind(this, "owl"),
    this::say("owl", "owl/words-such-as"),
    uncenter.bind(this, "owl"),

    ...words.map((word) => [
      revealChoice.bind(this, word),
      this::say("owl", `owl/${word}`, 300)
    ]),

    this::say("owl", "owl/make-the", 200),
    this::say("owl", "owl/phonic", 200),
    this::say("owl", "owl/sound", 200),
    this::say("owl", "owl/say", 200),
    ...words.map((word) =>
      this::say("owl", `owl/${word}`, 300)
    ),

    this::say("owl", "owl/then-touch", 200),
    endSpeaking.bind(this, "owl")
  ];
}

export default class Lesson extends React.Component {
  render() {
    return (
      <WordLesson {...this.props}
        number={11}
        activityCount={20}
        title="Find the Sound - Short o"
        words={["hop", "box", "rock"]}
        animation={animation}
      />
    );
  }
}
