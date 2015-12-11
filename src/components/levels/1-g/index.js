import React from "react";
import hasher from "hasher";
import Lesson1Sub from "components/levels/1/sub/lesson";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";
import activities from "./activities";

const exampleWords = ["gate", "giggle"];
const phonic = "g";

@soundContext({
  "owl/gate": "owl/words/gate",
  "owl/giggle": "owl/words/giggle",
  "teacher/gate": "teacher/words/gate",
  "teacher/giggle": "teacher/words/giggle"
})
@persists("level-1-g", true)
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
      activitiesComplete: false
    });
  }

  componentDidMount() {
    this.saveGlobal({lastLevel: "1-g"});
  }

  componentDidUpdate() {
    if(this.state.activitiesComplete) {
      hasher.setHash("level/1-s");
    }
  }

  render() {
    const {showingLesson, activityIndex, currentAnswer} = this.state;
    const Activity = this.getActivity();
    if(showingLesson) {
      return (<Lesson1Sub {...this.props} onComplete={::this.hideLesson} words={exampleWords} phonic={phonic}/>);
    } else if(Activity) {
      return (
        <Activity {...this.props}
          index={activityIndex + 11}
          answer={currentAnswer}
          onAnswer={::this.setCurrentAnswer}
          onComplete={::this.completeActivity}
          exampleWords={exampleWords} onOwlClick={::this.showLesson}
        />
      );
    } else {
      return null;
    }
  }
}
