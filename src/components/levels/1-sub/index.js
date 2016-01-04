import React from "react";
import hasher from "hasher";
import Lesson1Sub from "./lesson";
import Activity from "./activity";
import LevelFeedback from "components/levels/1/feedback";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";
import soundContext from "decorators/sound-context";

const noop = () => {};

export default function({
  phonic,
  exampleWords,
  activities,
  onComplete=noop,
  activityOffset=0,
  showScore
}) {
  const activityComponents = activities.map((activityProps) => {
    const sounds = activityProps.words.reduce((sounds, word) => {
      sounds[`teacher/${word}`] = `teacher/words/${word}`;
      return sounds;
    }, {});

    @soundContext(sounds)
    class ActivityInstance extends React.Component {
      render() {
        return (
          <Activity {...this.props} {...activityProps}/>
        );
      }
    }

    return ActivityInstance;
  });

  @soundContext({
    [`owl/${exampleWords[0]}`]: `owl/words/${exampleWords[0]}`,
    [`owl/${exampleWords[1]}`]: `owl/words/${exampleWords[1]}`,
    [`teacher/${exampleWords[0]}`]: `teacher/words/${exampleWords[0]}`,
    [`teacher/${exampleWords[1]}`]: `teacher/words/${exampleWords[1]}`
  })
  @persists(`level-1-${phonic}`, true)
  @hasLesson
  @hasActivities(activityComponents)
  class SubLevel extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.load({
        showingLesson: true,
        activityIndex: 0,
        score: 0,
        highscore: -1,
        activitiesComplete: false,
        total: activities.length
      });
    }

    componentDidMount() {
      this.saveGlobal({lastLevel: `1-${phonic}`});
    }

    componentDidUpdate() {
      if(this.state.activitiesComplete) {
        onComplete();
      }
    }

    render() {
      const {activitiesComplete, showingLesson, activityIndex, currentAnswer} = this.state;
      const Activity = this.getActivity();
      if(showScore && activitiesComplete) {
        return (<LevelFeedback onComplete={() => hasher.setHash("level/2")}/>);
      }

      if(showingLesson) {
        return (<Lesson1Sub {...this.props} onComplete={::this.hideLesson} words={exampleWords} phonic={phonic}/>);
      } else if(Activity) {
        return (
          <Activity {...this.props}
            index={activityIndex + activityOffset}
            answer={currentAnswer}
            onAnswer={::this.setCurrentAnswer}
            onComplete={::this.completeActivity}
            exampleWords={exampleWords} onOwlClick={::this.showLesson}
          />
        );
      } else {
        return null;
      }
    }
  }

  return SubLevel;
};
