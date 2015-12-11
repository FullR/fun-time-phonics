import React from "react";
import hasher from "hasher";
import Lesson1Sub from "components/levels/1/sub/lesson";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";
import activities from "./activities";

const exampleWords = ["mom", "monkey"];
const phonic = "m";

@soundContext({
  "owl/mom": "owl/words/mom",
  "owl/monkey": "owl/words/monkey",
  "teacher/mom": "teacher/words/mom",
  "teacher/monkey": "teacher/words/monkey"
})
@persists("level-1-m", true)
@hasLesson
@hasActivities(activities)
export default class Level1M extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      showingLesson: true,
      activityIndex: 0,
      score: 0,
      highscore: -1,
      activitiesCompleted: false
    });
  }

  componentDidMount() {
    this.saveGlobal({lastLevel: "1-m"});
  }

  componentDidUpdate() {
    if(this.state.activitiesComplete) {
      hasher.setHash("level/1-l");
    }
  }

  render() {
    const {showingLesson, activityIndex, currentAnswer} = this.state;
    const Activity = this.getActivity();
    if(showingLesson) {
      return (<Lesson1Sub {...this.props} onComplete={::this.hideLesson} phonic={phonic} words={exampleWords}/>);
    } else if(Activity) {
      return (
        <Activity {...this.props}
          index={activityIndex + 3}
          answer={currentAnswer}
          onAnswer={::this.setCurrentAnswer}
          exampleWords={exampleWords}
          onComplete={::this.completeActivity}
          onOwlClick={::this.showLesson}/>
      );
    } else {
      return null;
    }
  }
}
