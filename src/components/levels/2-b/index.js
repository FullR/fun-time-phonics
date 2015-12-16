import React from "react";
import Lesson2Sub from "components/levels/2/sub/lesson";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";
import Feedback from "components/levels/2/feedback";
import activities from "./activities";

const exampleWords = ["tub", "web"];
const phonic = "b";

@soundContext({
  "owl/tub": "owl/words/tub",
  "owl/web": "owl/words/web",
  "teacher/tub": "teacher/words/tub",
  "teacher/web": "teacher/words/web"
})
@persists("level-2-b", true)
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
    this.saveGlobal({lastLevel: "2-b"});
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete, currentAnswer} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (<Feedback {...this.props}/>);
    } else if(showingLesson) {
      return (<Lesson2Sub {...this.props} onComplete={::this.hideLesson} words={exampleWords} phonic={phonic}/>);
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
