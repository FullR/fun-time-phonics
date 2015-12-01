import React from "react";
import hasher from "hasher";
import persists from "decorators/persists";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import Lesson from "./lesson";
import Feedback from "./feedback";
import activities from "./activities";

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
  "teacher/dont-begin": "teacher/lesson-3/do-not-begin-with-the-same-sound",
  "teacher/begin-with": "teacher/lesson-3/begin-with-the-same-sound",
  "teacher/dont-end": "teacher/lesson-3/do-not-end-with-the-same-sound",
  "teacher/end-with": "teacher/lesson-3/end-with-the-same-sound",
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

  reset() {
    this.setState({
      activityIndex: 0,
      showingLesson: true,
      score: 0,
      activitiesComplete: false
    });
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (<Feedback onBack={::this.reset}/>);
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
