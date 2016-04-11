import React from "react";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import activities from "./activities";
import Feedback from "./feedback";

@soundContext({
  "owl/words-such-as": "owl/common/words-such-as",
  "owl/rhyme-because-they-all-make-the-same-ending-sound": "owl/common/rhyme-because-they-all-make-the-same-ending-sound",
  "owl/the-words": "owl/common/the-words",
  "owl/rhyme-because-they-all-end-in-ate": "owl/common/rhyme-because-they-all-end-in-ate",
  "owl/then-touch": "owl/common/then-touch-the-green-arrow-to-begin",
  "owl/say": "owl/common/say",

  "owl/red": "owl/words/red",
  "owl/head": "owl/words/head",
  "owl/bed": "owl/words/bed",
  "owl/wait": "owl/words/wait",
  "owl/gate": "owl/words/gate",
  "owl/eight": "owl/words/eight",

  "teacher/touch-the-two": "teacher/common/touch-the-two-words-that-rhyme",
  "teacher/rhymes-with": "teacher/common/rhymes-with",
  "teacher/does-not-rhyme-with": "teacher/common/does-not-rhyme-with"
})
@persists("level-5", true)
@hasActivities(activities)
@hasLesson
export default class Level5 extends React.Component {
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
      lastLevel: "5"
    });

    if(this.state.activitiesComplete) {
      this.resetActivities({showingLesson: true});
    }
  }

  reset() {
    this.setState({
      activityIndex: 0,
      showingLesson: true,
      activitiesComplete: false,
      score: 0
    });
  }

  render() {
    const {showingLesson, activityIndex, activitiesComplete, currentAnswer, reviewingLesson} = this.state;
    const Activity = this.getActivity();

    if(activitiesComplete) {
      return (
        <Feedback {...this.props}
          onBack={::this.reset}
        />
      );
    } else if(showingLesson) {
      return (
        <Lesson {...this.props}
          arrowLabel={`Activity ${activityIndex + 1}`}
          onComplete={::this.hideLesson}
        />
      );
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
