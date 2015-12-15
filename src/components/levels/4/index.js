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

  "owl/words-like": "owl/common/words-like",
  "owl/rhyme-because-they-all-have": "owl/common/rhyme-because-they-all-have-the-same-ending-sound",
  "owl/the-words": "owl/common/the-words",
  "owl/rhyme-because-they-all-end-in-ate": "owl/common/rhyme-because-they-all-end-in-ate",
  "owl/then-touch": "owl/common/then-touch",
  "owl/say": "owl/common/say",

  "owl/red": "owl/words/red",
  "owl/head": "owl/words/head",
  "owl/bed": "owl/words/bed",
  "owl/wait": "owl/words/wait",
  "owl/gate": "owl/words/gate",
  "owl/eight": "owl/words/eight",

  "teacher/touch-the-word": "teacher/common/touch-the-word-that-rhymes-with",
  "teacher/rhymes-with": "teacher/common/rhymes-with",
  "teacher/does-not-rhyme-with": "teacher/common/does-not-rhyme-with"
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

  componentDidMount() {
    this.saveGlobal({
      lastLevel: "4"
    });
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
