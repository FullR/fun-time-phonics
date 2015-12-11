import React from "react";
import hasher from "hasher";
import Lesson2Sub from "components/levels/2/sub/lesson";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

const activities = [
  require("./activities/1"),
  require("./activities/2")
];
const exampleWords = ["ham", "gum"];
const phonic = "m";

@soundContext({
  "owl/ham": "owl/words/ham",
  "owl/gum": "owl/words/gum",
  "teacher/ham": "teacher/words/ham",
  "teacher/gum": "teacher/words/gum"
})
@persists("level-2-m", true)
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
    this.saveGlobal({lastLevel: "2-m"});
  }

  componentDidUpdate() {
    if(this.state.activitiesComplete) {
      hasher.setHash("level/2-b");
    }
  }

  render() {
    const {showingLesson, activityIndex} = this.state;
    const Activity = this.getActivity();
    if(showingLesson) {
      return (<Lesson2Sub {...this.props} onComplete={::this.hideLesson} words={exampleWords} phonic={phonic}/>);
    } else if(Activity) {
      return (<Activity {...this.props} index={activityIndex + 11} onComplete={::this.completeActivity} exampleWords={exampleWords} onOwlClick={::this.showLesson}/>)
    } else {
      return null;
    }
  }
}
