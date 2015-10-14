import React from "react";
import hasher from "hasher";
import Lesson from "./lesson";
import persists from "decorators/persists";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import Feedback from "./feedback";

const activities = [
  require("./activities/1"),
  require("./activities/2"),
  require("./activities/3"),
  require("./activities/4"),
  require("./activities/5"),
  require("./activities/6"),
  require("./activities/7"),
  require("./activities/8"),
  require("./activities/9"),
  require("./activities/10"),
  require("./activities/11"),
  require("./activities/12"),
  require("./activities/13"),
  require("./activities/14"),
  require("./activities/15"),
  require("./activities/16"),
  require("./activities/17"),
  require("./activities/18"),
  require("./activities/19"),
  require("./activities/20"),
  require("./activities/21"),
  require("./activities/22"),
  require("./activities/23"),
  require("./activities/24")
];

@soundContext({
  applause: "applause",
  "owl/the-first-sound": "owl/lesson-1/the-first-sound-you-hear-in-a-word-is-called-the-beginning-sound",
  "owl/the-beginning-sound": "owl/lesson-3/the-beginning-sound-in-the-word",
  "owl/the-last-sound": "owl/lesson-2/the-last-sound-you-hear-in-a-word-is-called-the-ending-sound",
  "owl/the-ending-sound": "owl/lesson-3/the-ending-sound-in-the-word",
  "owl/is": "owl/common/is",
  "owl/say-the": "owl/lesson-3/say-the-beginning-and-ending-sound-in",
  "owl/then-touch": "owl/common/then-touch",

  "owl/cat": "owl/words/cat",
  "owl/k": "owl/common/phonics/_k_",
  "owl/t": "owl/common/phonics/_t_",

  "teacher/touch-the-two-words-beginning": "teacher/lesson-3/touch-the-two-words-that-make-the-same-beginning-sound",
  "teacher/touch-the-two-words-ending": "teacher/lesson-3/touch-the-two-words-that-make-the-same-ending-sound",
  "teacher/dont-begin": "teacher/lesson-3/dont-begin-with-the-same-sound",
  "teacher/begin-with": "teacher/lesson-3/begin-with-the-same-sound",
  "teacher/and": "teacher/common/and",
  "teacher/now-lets": "teacher/lesson-3/now-lets-listen-for-the-ending-sounds"
})
@persists("level-3", true)
@hasActivities(activities)
@hasLesson
export default class Level3 extends React.Component {
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
    this.saveGlobal({
      lastLevel: "3"
    });
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (<Feedback/>);
    }

    if(showingLesson) {
      return (<Lesson {...this.props} arrowLabel={`Activity ${activityIndex + 1}`} onComplete={::this.hideLesson}/>);
    } else if(Activity) {
      return (<Activity {...this.props} index={activityIndex} onComplete={::this.completeActivity} onOwlClick={::this.showLesson}/>);
    } else {
      return null;
    }
  }
}
