import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import activities from "./activities";
import Feedback from "./feedback";

@soundContext({
  applause: "applause",
  "teacher/listen-to": "teacher/common/listen-to-these-sounds-then-touch-the-word-they-make",
  "teacher/does-not-make": "teacher/common/does-not-make"
})
@persists("level-7", true)
@hasActivities(activities)
export default class Level7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      activityIndex: 0,
      score: 0,
      highscore: -1,
      activitiesComplete: false,
      total: activities.length
    });
  }

  componentDidMount() {
    this.saveGlobal({
      lastLevel: "7"
    });

    if(this.state.activitiesComplete) {
      this.resetActivities({showingLesson: true});
    }
  }

  reset() {
    this.setState({
      activityIndex: 0,
      score: 0,
      activitiesComplete: false
    });
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete, currentAnswer} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (<Feedback {...this.props} onBack={::this.reset}/>);
    } else if(Activity) {
      return (
        <Activity {...this.props}
          index={activityIndex}
          answer={currentAnswer}
          onAnswer={::this.setCurrentAnswer}
          onComplete={::this.completeActivity}
        />
      );
    } else {
      return null;
    }
  }
}
