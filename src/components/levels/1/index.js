import React from "react";
import hasher from "hasher";
import Lesson from "./lesson";
import persists from "decorators/persists";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";

import activities from "./activities";

@soundContext({
  applause: "applause",

  "owl/tail": "owl/words/tail",
  "owl/tip": "owl/words/tip",
  "owl/tape": "owl/words/tape",
  "owl/the-first-sound": "owl/common/the-first-sound-you-hear-in-a-word-is-called-the-beginning-sound",
  "owl/the-beginning-sound": "owl/common/the-beginning-sound-in-the-words",
  "owl/say-the-words": "owl/common/say-the-words",
  "owl/is": "owl/common/is",
  "owl/t": "owl/common/phonics/_t_",
  "owl/slowly": "owl/common/slowly",
  "owl/then-touch": "owl/common/then-touch",

  "teacher/touch-the-word": "teacher/common/touch-the-word-that-begins-with",
  "teacher/does-not-begin-with": "teacher/common/does-not-begin-with",
  "teacher/begins-with": "teacher/common/begins-with",
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
      currentAnswer: null,
      score: 0,
      highscore: -1,
      activitiesComplete: false,
      total: 15
    });
  }

  componentDidMount() {
    this.saveGlobal({
      lastLevel: "1"
    });
  }

  componentDidUpdate() {
    if(this.state.activitiesComplete) {
      hasher.setHash("level/1-m");
    }
  }

  render() {
    const {showingLesson, currentAnswer, activityIndex, activitiesComplete} = this.state;
    const Activity = this.getActivity();

    if(showingLesson) {
      return (<Lesson {...this.props} arrowLabel={`Activity ${activityIndex + 1}`} onComplete={::this.hideLesson}/>);
    } else if(Activity) {
      return (
        <Activity {...this.props}
          index={activityIndex}
          answer={currentAnswer}
          onAnswer={::this.setCurrentAnswer}
          onComplete={::this.completeActivity}
          onOwlClick={::this.showLesson}
        />
      );
    } else {
      return null;
    }
  }
}
