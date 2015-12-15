import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import Activities from "./activities";
import Feedback from "./feedback";

const phonic = "uh";

@soundContext({
  applause: "applause",
  "owl/words-like": "owl/common/words-like",
  "owl/up": "owl/words/up",
  "owl/in": "owl/words/in",
  "owl/on": "owl/words/on",
  "owl/make-the": "owl/lesson-8/make-the",
  "owl/sound": "owl/common/sound",
  "owl/say": "owl/common/say",
  "owl/then-touch": "owl/common/then-touch",
  "owl/phonic": `owl/common/phonics/_${phonic}_`,

  "teacher/touch-the-word": "teacher/lesson-8/touch-the-word-that-makes-the",
  "teacher/phonic": `teacher/common/phonics/_${phonic}_`,
  "teacher/say": "teacher/common/say",

  "teacher/does-not-make-the": "teacher/lesson-8/does-not-make-the",
  "teacher/makes-the": "teacher/lesson-8/makes-the",
  "teacher/sound": "teacher/common/sound"
})
@persists("level-12", true)
@hasActivities(Activities)
@hasLesson
export default class Level12 extends React.Component {
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
      lastLevel: "12"
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
    const {showingLesson, activityIndex, activitiesComplete, currentAnswer} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (<Feedback {...this.props} onBack={::this.reset}/>);
    } else if(showingLesson) {
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
