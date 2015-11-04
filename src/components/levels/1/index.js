import React from "react";
import hasher from "hasher";
import Lesson from "./lesson";
import persists from "decorators/persists";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";

const activities = [
  require("./activities/1"),
  require("./activities/2"),
  require("./activities/3")
];

@soundContext({
  applause: "applause",

  tail: "owl/words/tail",
  tip: "owl/words/tip",
  tape: "owl/words/tape",
  "the-first-sound": "owl/lesson-1/the-first-sound-you-hear-in-a-word-is-called-the-beginning-sound",
  "the-beginning-sound": "owl/lesson-1/the-beginning-sound-in-the-words",
  "say-the-words": "owl/lesson-1/say-the-words",
  "is": "owl/common/is",
  "t": "owl/common/phonics/_t_",
  "slowly": "owl/common/slowly",
  "then-touch": "owl/common/then-touch",

  "teacher/touch-the-word": "teacher/lesson-1/touch-the-word-that-begins-with",
  "teacher/does-not-begin-with": "teacher/lesson-1/does-not-begin-with",
  "teacher/begins-with": "teacher/lesson-1/begins-with",
  "teacher/phonic": "teacher/common/phonics/_t_",

  "teacher/top": "teacher/words/top",
  "teacher/pig": "teacher/words/pig",
  "teacher/hen": "teacher/words/hen",

  "teacher/bug": "teacher/words/bug",
  "teacher/ten": "teacher/words/ten",
  "teacher/car": "teacher/words/car",

  "teacher/wet": "teacher/words/wet",
  "teacher/pet": "teacher/words/pet",
  "teacher/toys": "teacher/words/toys"
})
@persists("level-1", true)
@hasActivities(activities)
@hasLesson
export default class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      activityIndex: 0,
      showingLesson: true,
      score: 0,
      highscore: -1,
      activitiesComplete: false
    });
  }

  componentDidMount() {
    if(this.state.activitiesComplete) {
      this.resetActivities({showingLesson: true});
    }
    this.saveGlobal({
      lastLevel: "1"
    });
  }

  componentDidUpdate() {
    this.props.soundContext.stopAll();
    if(this.state.activitiesComplete) {
      hasher.setHash("level/1-m");
    }
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete} = this.state;
    const Activity = this.getActivity();

    if(showingLesson) {
      return (<Lesson {...this.props} arrowLabel={`Activity ${activityIndex + 1}`} onComplete={::this.hideLesson}/>);
    } else if(Activity) {
      return (<Activity {...this.props} index={activityIndex} onComplete={::this.completeActivity} onOwlClick={::this.showLesson}/>);
    } else {
      return null;
    }
  }
}
