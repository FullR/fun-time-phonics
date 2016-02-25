import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import WordLesson from "components/word-lesson";
import activities from "./activities";
import Feedback from "components/feedback";

import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

const info = {
  title: "Consonant \"x\" Ending Sound",
  number: 118,
  letter: "x",
  lessonWords: ["axe", "Rex", "mix", "ox", "tux"],
  activityCount: activities.length
};

function lessonAnimation() {
  return [
    hideChoices.bind(this),
    this::say("owl", "owl/the-letter"),
    this::say("owl", "owl/letter"),
    this::say("owl", "owl/looks-like-this"),
    this::say("owl", "owl/the-letter"),
    this::say("owl", "owl/makes-the-ending-sound-of"),
    info.lessonWords.map((word) => [
      300,
      revealChoice.bind(this, word),
      this::say("owl", `owl/${word}`)
    ]),
    this::say("owl", "owl/say-the-words"),
    info.lessonWords.map((word) => [
      300,
      revealChoice.bind(this, word),
      this::say("owl", `owl/${word}`)
    ]),
    this::say("owl", "owl/then-touch"),
    endSpeaking.bind(this, "owl")
  ];
}

@soundContext({
  applause: "applause",
  ...info.lessonWords.reduce((sounds, word) => {
    sounds[`owl/${word}`] = `owl/words/${word}`;
    return sounds;
  }, {}),
  "owl/the-letter": "owl/common/the-letter",
  "owl/letter": `owl/common/letters/${info.letter}`,
  "owl/looks-like-this": "owl/common/looks-like-this",
  "owl/makes-the-ending-sound-of": "owl/common/makes-the-ending-sound-of",
  "owl/say-the-words": "owl/common/say-the-words",
  "owl/then-touch": "owl/common/then-touch-the-green-arrow-to-begin",

  // Question
  "teacher/touch-the-word-that-ends-with-the": "teacher/common/touch-the-word-that-ends-with-the",
  "teacher/letter": `teacher/common/letters/${info.letter}`,
  "teacher/sound": "teacher/common/sound",
  // Incorrect
  "teacher/does-not-end-with-the": "teacher/common/does-not-end-with-the",
  // Correct
  "teacher/ends-with-the": "teacher/common/ends-with-the"
})
@persists(`level-${info.number}`, true)
@hasActivities(activities)
@hasLesson
export default class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      activityIndex: 0,
      score: 0,
      highscore: -1,
      activitiesComplete: false,
      showingLesson: true
    });
  }

  componentDidMount() {
    this.saveGlobal({
      lastLevel: info.number.toString()
    });

    if(this.state.activitiesComplete) {
      this.resetActivities({showingLesson: true});
    }
  }

  reset() {
    this.setState({
      activityIndex: 0,
      score: 0,
      activitiesComplete: false,
      showingLesson: true
    });
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete} = this.state;
    const Activity = this.getActivity();

    if(showingLesson) {
      return (<WordLesson {...this.props} {...info} words={info.lessonWords} animation={lessonAnimation} arrowLabel={`Activity ${activityIndex + 1}`} onComplete={::this.hideLesson}/>);
    } else if(activitiesComplete) {
      return (<Feedback {...this.props} {...info} onBack={::this.reset}/>);
    } else if(Activity) {
      return (
        <Activity {...this.props} {...info}
          index={activityIndex}
          onComplete={::this.completeActivity}
        />
      );
    } else {
      return null;
    }
  }
}
