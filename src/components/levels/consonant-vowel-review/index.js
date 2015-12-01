import React from "react";
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
  const {number, activityData, letters, lessonWords} = info;

  const activities = activityData.map((activity) => {
    return class ActivityInstance extends React.Component {
      render() {
        return (
          <Activity {...this.props} {...info}
            Question={Question}
            Response={Response}
          />
        );
      }
    }
  });

  @soundContext({
    applause: "applause",
    ...arrToObj(lessonWords, (word) => [`owl/${word}`, `owl/words/${word}`]),
    ...arrToObj(letters, (letter) => [`owl/${letter}`, `owl/common/letters/${letter}`]),
    ...arrToObj(letters, (letter) => [`teacher/${letter}`, `teacher/common/letters/${letter}`])
  })
  @persists(`level-${number}`, true)
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
        return (<Feedback {...this.props} onBack={::this.reset}/>);
      } else if(showingLesson) {
        return (
          <Lesson {...this.props}
            words={lessonWords}
            arrowLabel={`Activity ${activityIndex + 1}`}
            onComplete={::this.hideLesson}
          />
      );
      } else if(Activity) {
        return (<Activity {...this.props} index={activityIndex} onComplete={::this.completeActivity} onOwlClick={::this.showLesson}/>);
      } else {
        return null;
      }
    }
  }

  return Level;
};
