import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import activities from "./activities";
import Feedback from "./feedback";
import {number, letter, phonic, lessonWords} from "./info";

@soundContext({
  applause: "applause",

  "owl/axe": "owl/words/axe",
  "owl/Ed": "owl/words/Ed",
  "owl/itch": "owl/words/itch",
  "owl/otter": "owl/words/otter",
  "owl/up": "owl/words/up",

  "owl/lets-review": "owl/common/lets-review-the-letter-sounds-we-have-learned",
  "owl/say-each": "owl/common/say-each-letters-sound",
  "owl/the-letter": "owl/common/the-letter",
  "owl/makes-the": "owl/common/makes-the",
  "owl/then-touch": "owl/common/then-touch-the-green-arrow-to-begin",
  "owl/sound-in": "owl/common/sound-in",

  "teacher/drag-the-letter": "teacher/common/drag-the-letter-to-the-picture-that-makes-the",
  "teacher/sound-so-it-does-not-have-an": "teacher/common/sound-so-it-does-not-have-an",
  "teacher/does-not-make-the": "teacher/common/does-not-make-the",
  "teacher/makes-the": "teacher/common/makes-the",
  "teacher/in-it": "teacher/common/in-it",
  "teacher/sound-in": "teacher/common/sound-in",
  "teacher/yes": "teacher/common/yes",

  "teacher/say-the-letter": "teacher/common/say-the-letter-sound-and-then-touch-the-word-that-makes-that-sound",
  "teacher/there-is-no": "teacher/common/there-is-no",
  "teacher/has-an": "teacher/common/has-an",

  "owl/a": "owl/common/letters/a",
  "owl/e": "owl/common/letters/e",
  "owl/i": "owl/common/letters/i",
  "owl/o": "owl/common/letters/o",
  "owl/u": "owl/common/letters/u",

  "owl/ah": "owl/common/phonics/_ah_",
  "owl/eh": "owl/common/phonics/_eh_",
  "owl/ih": "owl/common/phonics/_ih_",
  "owl/oh": "owl/common/phonics/_oh_",
  "owl/uh": "owl/common/phonics/_uh_",

  "teacher/a": "teacher/common/letters/a",
  "teacher/e": "teacher/common/letters/e",
  "teacher/i": "teacher/common/letters/i",
  "teacher/o": "teacher/common/letters/o",
  "teacher/u": "teacher/common/letters/u",

  "teacher/ah": "teacher/common/phonics/_ah_",
  "teacher/eh": "teacher/common/phonics/_eh_",
  "teacher/ih": "teacher/common/phonics/_ih_",
  "teacher/oh": "teacher/common/phonics/_oh_",
  "teacher/uh": "teacher/common/phonics/_uh_"
})
@persists(`level-${number}`, true)
@hasActivities(activities)
@hasLesson
export default class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      activityIndex: 0,
      showingLesson: true,
      score: 0,
      highscore: -1,
      activitiesComplete: false,
      total: activities.length
    });
  }

  componentDidMount() {
    this.saveGlobal({
      lastLevel: number.toString()
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
    });
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete, currentAnswer, reviewingLesson} = this.state;
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
          onOwlClick={::this.reviewLesson}
          fullInstructions={reviewingLesson}
        />
      );
    } else {
      return null;
    }
  }
}
