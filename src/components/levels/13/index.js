import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import Activities from "./activities";
import Feedback from "./feedback";

@soundContext({
  applause: "applause",

  "owl/ah": "owl/common/phonics/_ah_",
  "owl/eh": "owl/common/phonics/_eh_",
  "owl/ih": "owl/common/phonics/_ih_",
  "owl/oh": "owl/common/phonics/_oh_",
  "owl/uh": "owl/common/phonics/_uh_",

  "owl/rat": "owl/words/rat",
  "owl/wet": "owl/words/wet",
  "owl/sit": "owl/words/sit",
  "owl/pot": "owl/words/pot",
  "owl/rug": "owl/words/rug",

  "owl/listen-to": "owl/lesson-13/listen-to-the-middle-sound-in-these-words",
  "owl/makes-the": "owl/lesson-13/makes-the",
  "owl/sound": "owl/common/sound",
  "owl/and": "owl/common/and",
  "owl/touch-the": "owl/common/touch-the",

  "teacher/ah": "teacher/common/phonics/_ah_",
  "teacher/eh": "teacher/common/phonics/_eh_",
  "teacher/ih": "teacher/common/phonics/_ih_",
  "teacher/oh": "teacher/common/phonics/_oh_",
  "teacher/uh": "teacher/common/phonics/_uh_",

  "teacher/touch-the": "teacher/lesson-13/touch-the-word-that-makes-a-different-middle-sound",
  "teacher/make-the-same": "teacher/lesson-13/make-the-same",
  "teacher/make-the": "teacher/lesson-13/make-the",
  "teacher/makes-the": "teacher/lesson-13/makes-the",
  "teacher/and": "teacher/common/and",
  "teacher/sound": "teacher/common/sound"
})
@persists("level-13", true)
@hasActivities(Activities)
@hasLesson
export default class Level13 extends React.Component {
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
      lastLevel: "13"
    });

    if(this.state.activitiesComplete) {
      this.resetActivities({showingLesson: true});
    }
  }

  reset() {
    this.setState({
      activityIndex: 0,
      showingLesson: true,
      score: 0,
      activitiesComplete: false
    })
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
