import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Activities from "./activities";
import Feedback from "./feedback";

@soundContext({
  applause: "applause",
  "teacher/say-the": "teacher/level-7/say-the-word-the-same-way-i-say-it-then-touch-its-picture",
  "teacher/does-not-make": "teacher/level-6/does-not-make"
})
@persists("level-7", true)
@hasActivities(Activities)
export default class Level7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      activityIndex: 0,
      score: 0,
      highscore: -1,
      activitiesComplete: false
    });
  }

  reset() {
    this.setState({
      activityIndex: 0,
      score: 0,
      activitiesComplete: false
    });
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (<Feedback {...this.props} onBack={::this.reset}/>);
    } else if(Activity) {
      return (<Activity {...this.props} index={activityIndex} onComplete={::this.completeActivity}/>);
    } else {
      return null;
    }
  }
}
