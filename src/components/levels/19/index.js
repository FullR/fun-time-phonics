import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import Activities from "./activities";
import Feedback from "./feedback";
import {number, letter, phonic, lessonWords} from "./info";

@soundContext({
  applause: "applause",

  ...lessonWords.reduce((sounds, word) => {
    sounds[`owl/${word}`] = `owl/words/${word}`;
    return sounds;
  }, {}),

  "owl/the-letter": "owl/common/the-letter",
  "owl/looks-like-this": "owl/common/looks-like-this",
  "owl/makes-the": "owl/common/makes-the",
  "owl/sound-in": "owl/common/sound-in",
  "owl/sound-in-them": "owl/common/sound-in-them",
  "owl/touch-the": "owl/common/touch-the",
  "owl/letter": `owl/common/letters/${letter}`,
  "owl/phonic": `owl/common/phonics/_${phonic}_`,

  "owl/we-use-the-letter": "owl/lesson-15/we-use-the-letter",
  "owl/to-write-words": "owl/lesson-15/to-write-words-that-have-the",

  "teacher/does-not-make-the": "teacher/common/does-not-make-the",
  "teacher/makes-the": "teacher/common/makes-the",
  "teacher/has-a": "teacher/common/has-a",
  "teacher/in-it": "teacher/common/in-it",
  "teacher/letter": `teacher/common/letters/${letter}`,
  "teacher/phonic": `teacher/common/phonics/_${phonic}_`,

  "teacher/sound-so-it-does-not": "teacher/lesson-19/sound-so-it-does-not-have-a",
  "teacher/sound-so": "teacher/lesson-15/sound-so",
  "teacher/drag-the-letter": "teacher/lesson-15/drag-the-letter",
  "teacher/to-the-word": "teacher/lesson-15/to-the-word-that-makes-that-sound",
  "teacher/that-is-not-the-letter": "teacher/lesson-15/that-is-not-the-letter"
})
@persists(`level-${number}`, true)
@hasActivities(Activities)
@hasLesson
export default class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      activityIndex: 0,
      showingLesson: true,
      score: 0,
      highscore: -1,
      activitiesComplete: false
    });
  }

  componentDidMount() {
    this.saveGlobal({
      lastLevel: number.toString()
    });
  }

  reset() {
    this.setState({
      activityIndex: 0,
      showingLesson: true,
      score: 0,
      activitiesComplete: false
    });
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (<Feedback {...this.props} onBack={::this.reset}/>);
    } else if(showingLesson) {
      return (<Lesson {...this.props} arrowLabel={`Activity ${activityIndex + 1}`} onComplete={::this.hideLesson}/>);
    } else if(Activity) {
      return (<Activity {...this.props} index={activityIndex} onComplete={::this.completeActivity} onOwlClick={::this.showLesson}/>);
    } else {
      return null;
    }
  }
}
