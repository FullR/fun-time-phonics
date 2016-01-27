import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import activities from "./activities";
import Feedback from "./feedback";

const phonic = "ah";

@soundContext({
  applause: "applause",
  "owl/words-like": "owl/common/words-such-as",
  "owl/bat": "owl/words/bat",
  "owl/dad": "owl/words/dad",
  "owl/wag": "owl/words/wag",
  "owl/make-the": "owl/common/make-the",
  "owl/sound": "owl/common/sound",
  "owl/say": "owl/common/say",
  "owl/then-touch": "owl/common/then-touch-the-green-arrow-to-begin",
  "owl/phonic": `owl/common/phonics/_${phonic}_`,

  "teacher/touch-the-word": "teacher/common/touch-the-word-that-makes-the",
  "teacher/phonic": `teacher/common/phonics/_${phonic}_`,
  "teacher/say": "teacher/common/say",

  "teacher/does-not-make-the": "teacher/common/does-not-make-the",
  "teacher/makes-the": "teacher/common/makes-the",
  "teacher/sound": "teacher/common/sound"
})
@persists("level-8", true)
@hasActivities(activities)
@hasLesson
export default class Level8 extends React.Component {
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
      lastLevel: "8"
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
