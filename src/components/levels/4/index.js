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

  "owl/words-like": "owl/level-4/words-like",
  "owl/because-they-all-make": "owl/level-4/because-they-all-make-the-same-sound",
  "owl/the-words": "owl/level-4/the-words",
  "owl/because-they-all-make-ate": "owl/level-4/because-they-all-make-ate",
  "owl/then-touch": "owl/common/then-touch",

  "owl/red": "owl/words/red",
  "owl/head": "owl/words/head",
  "owl/bed": "owl/words/bed",
  "owl/wait": "owl/words/wait",
  "owl/gate": "owl/words/gate",
  "owl/eight": "owl/words/eight",

  "teacher/touch-the-word": "teacher/level-4/touch-the-word-that-rhymes-with",
  "teacher/rhymes-with": "teacher/level-4/rhymes-with",
  "teacher/does-not-rhyme-with": "teacher/level-4/does-not-rhyme-with"
})
@persists("level-4", true)
@hasActivities(Activities)
@hasLesson
export default class Level4 extends React.Component {
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

  render() {
    const {showingLesson, activityIndex, activitiesComplete} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (<Feedback {...this.props}/>);
    } else if(showingLesson) {
      return (<Lesson {...this.props} arrowLabel={`Activity ${activityIndex + 1}`} onComplete={::this.hideLesson}/>);
    } else if(Activity) {
      return (<Activity {...this.props} index={activityIndex} onComplete={::this.completeActivity} onOwlClick={::this.showLesson}/>);
    } else {
      return null;
    }
  }
}
