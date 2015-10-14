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

  hot: "owl/words/hot",
  bat: "owl/words/bat",
  sit: "owl/words/sit",
  "the-last-sound": "owl/lesson-2/the-last-sound-you-hear-in-a-word-is-called-the-ending-sound",
  "the-ending-sound": "owl/lesson-2/the-ending-sound-in-the-words",
  "say-the-words": "owl/lesson-2/say-the-words",
  "is": "owl/common/is",
  "t": "owl/common/phonics/_t_",
  "slowly": "owl/common/slowly",
  "then-touch": "owl/common/then-touch",

  "teacher/touch-the-word": "teacher/lesson-2/touch-the-word-that-ends-with",
  "teacher/does-not-end-with": "teacher/lesson-2/does-not-end-with",
  "teacher/ends-with": "teacher/lesson-2/ends-with",
  "teacher/phonic": "teacher/common/phonics/_t_",

  "teacher/cat": "teacher/words/cat",
  "teacher/fish": "teacher/words/fish",
  "teacher/hop": "teacher/words/hop",

  "teacher/butter": "teacher/words/butter",
  "teacher/two": "teacher/words/two",
  "teacher/pot": "teacher/words/pot",

  "teacher/stick": "teacher/words/stick",
  "teacher/blast": "teacher/words/blast",
  "teacher/sister": "teacher/words/sister"
})
@persists("level-2", true)
@hasActivities(activities)
@hasLesson
export default class Level2 extends React.Component {
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
      lastLevel: "2"
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.activitiesComplete) {
      hasher.setHash("level/2-d");
    }
  }

  render() {
    const {showingLesson, activityIndex} = this.state;
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
