import React from "react";
import hasher from "hasher";
import Lesson1Sub from "components/levels/1/sub/lesson";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

const activities = [
  require("./activities/1"),
  require("./activities/2")
];
const exampleWords = ["rat", "rain"];
const phonic = "r";

@soundContext({
  "owl/rat": "owl/words/rat",
  "owl/rain": "owl/words/rain",
  "teacher/rat": "teacher/words/rat",
  "teacher/rain": "teacher/words/rain"
})
@persists("level-1-r", true)
@hasLesson
@hasActivities(activities)
export default class Level1L extends React.Component {
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
    if(this.state.activitiesComplete) {
      this.resetActivities({showingLesson: true});
    }
    this.saveGlobal({lastLevel: "1-r"});
  }

  componentDidUpdate() {
    if(this.state.activitiesComplete) {
      hasher.setHash("level/1-g");
    }
  }

  render() {
    const {showingLesson, activityIndex} = this.state;
    const Activity = this.getActivity();
    if(showingLesson) {
      return (<Lesson1Sub {...this.props} onComplete={::this.hideLesson} words={exampleWords} phonic={phonic}/>);
    } else if(Activity) {
      return (<Activity {...this.props} index={activityIndex + 9} onComplete={::this.completeActivity} exampleWords={exampleWords} onOwlClick={::this.showLesson}/>)
    } else {
      return null;
    }
  }
}
