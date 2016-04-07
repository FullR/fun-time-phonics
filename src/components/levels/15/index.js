import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import activities from "./activities";
import Feedback from "./feedback";
import {number, letter, phonic, lessonWords} from "./info";

@soundContext({

  ...lessonWords.reduce((sounds, word) => {
    sounds[`owl/${word}`] = `owl/words/${word}`;
    return sounds;
  }, {}),

  "owl/the-letter": "owl/common/the-letter",
  "owl/looks-like-this": "owl/common/looks-like-this",
  "owl/makes-the": "owl/common/makes-the",
  "owl/sound-in": "owl/common/sound-in",
  "owl/sound-in-them": "owl/common/sound-in-them",
  "owl/touch-the": "owl/common/touch-the-green-arrow-to-begin",
  "owl/letter": `owl/common/letters/${letter}`,
  "owl/phonic": `owl/common/phonics/_${phonic}_`,

  "owl/we-use-the-letter": "owl/common/we-use-the-letter",
  "owl/to-write-words": "owl/common/to-write-words-that-have-the",

  "teacher/does-not-have": "teacher/common/does-not-have",
  "teacher/has": "teacher/common/has",
  "teacher/has-an": "teacher/common/has-an",
  "teacher/in-it": "teacher/common/in-it",
  "teacher/letter": `teacher/common/letters/${letter}`,
  "teacher/phonic": `teacher/common/phonics/_${phonic}_`,

  "teacher/so-it-does-not": "teacher/common/so-it-does-not-have-an",
  "teacher/so": "teacher/common/so",
  "teacher/drag-the-letter": "teacher/common/drag-the-letter",
  "teacher/to-the-word": "teacher/common/to-the-word-that-makes-that-sound",
  "teacher/this-is-not-the-letter": "teacher/common/this-is-not-the-letter"
})
@persists(`level-${number}`, true)
@hasActivities(activities)
@hasLesson
export default class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      activityIndex: 0,
      showingLesson: true,
      score: 0,
      highscore: -1,
      activitiesComplete: false,
      total: activities.length
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
    const {showingLesson, activityIndex, activitiesComplete, currentAnswer, reviewingLesson} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (<Feedback {...this.props} onBack={::this.reset}/>);
    } else if(showingLesson) {
      return (<Lesson {...this.props} arrowLabel={`Activity ${activityIndex + 1}`} onComplete={::this.hideLesson}/>);
    } else if(Activity) {
      return (
        <Activity {...this.props}
          key={`activity-${activityIndex}`}
          index={activityIndex}
          answer={currentAnswer}
          onAnswer={::this.setCurrentAnswer}
          onComplete={::this.completeActivity}
          onOwlClick={::this.reviewLesson}
          fullInstructions={reviewingLesson}
        />
      );
    } else {
      return null;
    }
  }
}
