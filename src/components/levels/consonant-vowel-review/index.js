import React from "react";
import {uniq, flatten} from "lodash";
import arrToObj from "util/arr-to-obj";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import Question from "./question";
import Response from "./response";

import Feedback from "components/feedback";
import Activity from "components/activity";

export default (info) => {
  const {number, activityData, lessonLetters, lessonWords} = info;

  const activities = activityData.map((activity) => {
    @soundContext({
      "teacher/word": `teacher/words/${activity.word}`
    })
    class ActivityInstance extends React.Component {
      render() {
        return (
          <Activity {...this.props} {...info} {...activity}
            Question={Question}
            Response={Response}
            checkAnswer={({letter}, correct) => letter === correct}
          />
        );
      }
    }
    return ActivityInstance;
  });

  const activityLetters = uniq(flatten(activityData.map((a) => a.letters)));

  @soundContext({
    applause: "applause",
    ...arrToObj(lessonWords, (word) => [`owl/${word}`, `owl/words/${word}`]),
    ...arrToObj(lessonLetters, (letter) => [`owl/${letter}`, `owl/common/letters/${letter}`]),
    ...arrToObj(lessonLetters, (letter) => [`owl/${letter}h`, `owl/common/phonics/_${letter}h_`]),
    ...arrToObj(activityLetters, (letter) => [`teacher/${letter}`, `teacher/common/letters/${letter}`]),
    ...arrToObj(activityLetters, (letter) => [`teacher/${letter}h`, `teacher/common/phonics/_${letter}h_`]),

    // Lesson
    "owl/lets-review-the-sounds-we-just-learned": "owl/common/lets-review-the-sounds-we-just-learned",
    "owl/the-letters": "owl/common/the-letters",
    "owl/make-the": "owl/common/make-the",
    "owl/sound-in": "owl/common/sound-in",
    "owl/touch-the": "owl/common/touch-the",

    // Question
    "teacher/drag-the-letters-to-the-picture-that-begin-the-word": "teacher/common/drag-the-letters-to-the-picture-that-begin-the-word",

    // Incorrect
    "teacher/the-letters": "teacher/common/the-letters",
    "teacher/make-the": "teacher/common/make-the",
    "teacher/sound-so": "teacher/common/sound-so",
    "teacher/does-not-begin-with": "teacher/common/does-not-begin-with",

    // correct
    "teacher/correct": "teacher/common/correct",
    "teacher/makes-the": "teacher/common/makes-the",
    "teacher/sound-in": "teacher/common/sound-in"
  })
  @persists(`level-${number}`)
  @hasActivities(activities)
  @hasLesson
  class Level extends React.Component {
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
        return (<Feedback {...this.props} {...info} onBack={::this.reset}/>);
      } else if(showingLesson) {
        return (
          <Lesson {...this.props} {...info}
            words={lessonWords}
            arrowLabel={`Activity ${activityIndex + 1}`}
            onComplete={::this.hideLesson}
          />
      );
      } else if(Activity) {
        return (<Activity {...this.props} {...info} index={activityIndex} onComplete={::this.completeActivity} onOwlClick={::this.showLesson}/>);
      } else {
        return null;
      }
    }
  }

  return Level;
};
