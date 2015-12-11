import React from "react";
import hasher from "hasher";
import Lesson1Sub from "components/levels/1/sub/lesson";
import LevelFeedback from "components/levels/1/feedback";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";
import activities from "./activities";

const exampleWords = ["sit", "sister"];
const phonic = "s";

@soundContext({
  "owl/sit": "owl/words/sit",
  "owl/sister": "owl/words/sister",
  "teacher/sit": "teacher/words/sit",
  "teacher/sister": "teacher/words/sister"
})
@persists("level-1-s", true)
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
    this.saveGlobal({lastLevel: "1-s"});
  }

  render() {
    const {activitiesComplete, showingLesson, activityIndex, currentAnswer} = this.state;
    const Activity = this.getActivity();
    if(activitiesComplete) {
      return (<LevelFeedback onComplete={() => hasher.setHash("level/2")}/>);
    }

    if(showingLesson) {
      return (<Lesson1Sub {...this.props} onComplete={::this.hideLesson} words={exampleWords} phonic={phonic}/>);
    } else if(Activity) {
      return (
        <Activity {...this.props}
          index={activityIndex + 13}
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
