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

  "owl/hot": "owl/words/hot",
  "owl/bat": "owl/words/bat",
  "owl/sit": "owl/words/sit",

  "owl/the-last-sound": "owl/common/the-last-sound-you-hear-in-a-word-is-called-the-ending-sound",
  "owl/the-ending-sound": "owl/common/the-ending-sound-in-the-words",
  "owl/say-the-words": "owl/common/say-the-words",
  "owl/is": "owl/common/is",
  "owl/t": "owl/common/phonics/_t_",
  "owl/slowly": "owl/common/slowly",
  "owl/then-touch": "owl/common/then-touch-the-green-arrow-to-begin",

  "teacher/touch-the-word": "teacher/common/touch-the-word-that-ends-with",
  "teacher/does-not-end-with": "teacher/common/does-not-end-with",
  "teacher/ends-with": "teacher/common/ends-with",
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
      activitiesComplete: false,
      total: 15
    });
  }

  componentDidMount() {
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
    const {showingLesson, activityIndex, currentAnswer, reviewingLesson} = this.state;
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
          onOwlClick={::this.reviewLesson}
          fullInstructions={reviewingLesson}
        />
      );
    } else {
      return null;
    }
  }
}
