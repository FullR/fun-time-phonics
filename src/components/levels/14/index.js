import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import Activities from "./activities";
import Feedback from "./feedback";
import {number} from "./info";

@soundContext({
  applause: "applause",

  // lesson
  "owl/bad": "owl/words/bad",
  "owl/bed": "owl/words/bed",
  "owl/hit": "owl/words/hit",
  "owl/hot": "owl/words/hot",

  "owl/if-you-replace-the": "owl/lesson-14/if-you-replace-the",
  "owl/the-new-word-is": "owl/lesson-14/the-new-word-is",

  "owl/in": "owl/common/in",
  "owl/with": "owl/common/with",
  "owl/touch-the": "owl/common/touch-the",
  "owl/ah": "owl/common/phonics/_ah_",
  "owl/eh": "owl/common/phonics/_eh_",
  "owl/ih": "owl/common/phonics/_ih_",
  "owl/oh": "owl/common/phonics/_oh_",

  // Question
  "teacher/replace-the": "teacher/lesson-14/replace-the",
  "teacher/what-is-the-new-word": "teacher/lesson-14/what-is-the-new-word",

  "teacher/in": "teacher/common/in",
  "teacher/with": "teacher/common/with",

  "teacher/ah": "teacher/common/phonics/_ah_",
  "teacher/eh": "teacher/common/phonics/_eh_",
  "teacher/ih": "teacher/common/phonics/_ih_",
  "teacher/oh": "teacher/common/phonics/_oh_",
  "teacher/uh": "teacher/common/phonics/_uh_",

  // Response
  "teacher/yes": "teacher/common/yes",
  "teacher/if-you-replace-the": "teacher/lesson-14/if-you-replace-the",
  "teacher/the-new-word-is": "teacher/lesson-14/the-new-word-is"
})
@persists(`level-${number}`, true)
@hasActivities(Activities)
@hasLesson
export default class Level extends React.Component {
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
      lastLevel: number.toString()
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
      return (<Feedback {...this.props} onBack={::this.reset}/>);
    } else if(showingLesson) {
      return (<Lesson {...this.props} arrowLabel={`Activity ${activityIndex + 1}`} onComplete={::this.hideLesson}/>);
    } else if(Activity) {
      return (<Activity {...this.props} index={activityIndex} onComplete={::this.completeActivity} onOwlClick={::this.showLesson}/>);
    } else {
      return null;
    }
  }
}
