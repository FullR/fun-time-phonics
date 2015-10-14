import React from "react";
import hasher from "hasher";
import Lesson2Sub from "components/levels/1/sub/lesson";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

const activities = [
  require("./activities/1"),
  require("./activities/2")
];
const exampleWords = ["off", "roof"];
const phonic = "f";

@soundContext({
  "owl/off": "owl/words/off",
  "owl/roof": "owl/words/roof",
  "teacher/off": "teacher/words/off",
  "teacher/roof": "teacher/words/roof"
})
@persists("level-2-f", true)
@hasLesson
@hasActivities(activities)
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      showingLesson: true,
      activityIndex: 0,
      score: 0,
      highscore: -1,
      activitiesComplete: false
    });
  }

  componentDidMount() {
    if(this.state.activitiesComplete) {
      this.resetActivities({showingLesson: true});
    }
    this.saveGlobal({lastLevel: "2-f"});
  }

  componentDidUpdate() {
    if(this.state.activitiesComplete) {
      hasher.setHash("level/2-m");
    }
  }

  render() {
    const {showingLesson, activityIndex} = this.state;
    const Activity = this.getActivity();
    if(showingLesson) {
      return (<Lesson2Sub {...this.props} onComplete={::this.hideLesson} words={exampleWords} phonic={phonic}/>);
    } else if(Activity) {
      return (<Activity {...this.props} index={activityIndex + 10} onComplete={::this.completeActivity} exampleWords={exampleWords} onOwlClick={::this.showLesson}/>)
    } else {
      return null;
    }
  }
}
