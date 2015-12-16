import React from "react";
import hasher from "hasher";
import Lesson2Sub from "components/levels/2/sub/lesson";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";
import activities from "./activities";

const exampleWords = ["kid", "bed"];
const phonic = "d";

@soundContext({
  "owl/kid": "owl/words/kid",
  "owl/bed": "owl/words/bed",
  "teacher/kid": "teacher/words/kid",
  "teacher/bed": "teacher/words/bed"
})
@persists("level-2-d", true)
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
      activitiesComplete: false,
      total: activities.length
    });
  }

  componentDidMount() {
    this.saveGlobal({lastLevel: "2-d"});
  }

  componentDidUpdate() {
    if(this.state.activitiesComplete) {
      hasher.setHash("level/2-p");
    }
  }

  render() {
    const {showingLesson, activityIndex, currentAnswer} = this.state;
    const Activity = this.getActivity();
    if(showingLesson) {
      return (<Lesson2Sub {...this.props} onComplete={::this.hideLesson} words={exampleWords} phonic={phonic}/>);
    } else if(Activity) {
      return (
        <Activity {...this.props}
          index={activityIndex + 3}
          answer={currentAnswer}
          onAnswer={::this.setCurrentAnswer}
          onComplete={::this.completeActivity}
          exampleWords={exampleWords}
          onOwlClick={::this.showLesson}
        />
      );
    } else {
      return null;
    }
  }
}
