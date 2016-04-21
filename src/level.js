import React from "react";
import {noop} from "lodash";
import store from "store";
import actions from "store/actions";
import toPercent from "util/to-percent";
import storeListener from "decorators/store-listener";

const getLevel = (id) => (state) => state.levels.find((level) => level.id === level);

function act(action) {
  return () => store.dispatch(action);
}

export default function level({
  id,
  Lesson,
  Feedback,
  Response,
  Activity,
  passingPercent=85,
  activities=[],
  levelProps={} // passed to all parts of the level (Lesson, Activity, Response, Feedback)
}) {
  if(!id) throw new Error("Level id is required");
  if(!Response) throw new Error(`Response component is required. Check level ${id}`);
  if(!Activity) throw new Error(`Activity component is required. Check level ${id}`);

  levelProps = Object.assign({}, { // add default values to levelProps
    levelId: id,
    activityCount: activities.length
  }, levelProps);

  class Level extends React.Component {
    static propTypes = {
      onNext: React.PropTypes.func
    };

    static defaultProps = {
      onNext: noop
    };

    componentWillReceiveProps(nextProps) {
      if(nextProps.activityIndex >= activities.length && !Feedback) {
        this.props.onNext();
      }
    }

    showLesson() {
      store.dispatch({type: actions.SHOW_LESSON, levelId: id});
    }

    resetLevel() {
      store.dispatch({type: actions.RESET_LEVEL, levelId: id});
    }

    render() {
      const {complete, activityIndex, showingLesson, currentAnswer, score, onNext} = this.props;
      const maxScore = activities.length;
      const activityData = activities[activityIndex];
      const showLesson = this.showLesson.bind(this);

      switch(true) {
        case Lesson && showingLesson: return (
          <Lesson {...levelProps}
            activityIndex={activityIndex}
            onNext={act({type: actions.HIDE_LESSON, levelId: id})}
          />
        );
        case !!currentAnswer: return (
          <Response {...levelProps} {...activityData}
            showLesson={showLesson}
            answer={currentAnswer}
            activityIndex={activityIndex}
            onNext={act({type: actions.COMPLETE_ACTIVITY, levelId: id})}
          />
        );
        case Feedback && activityIndex >= activities.length: return (
          <Feedback {...levelProps}
            showLesson={showLesson}
            passing={toPercent(score, maxScore) >= passingPercent}
            onNext={onNext}
            onBack={this.resetLevel.bind(this)}
            score={score}
            max={activities.length}
          />
        );
        case activityIndex < activities.length: return (
          <Activity {...levelProps} {...activityData}
            showLesson={showLesson}
            activityIndex={activityIndex}
            onShowLesson={act({type: actions.SHOW_LESSON, levelId: id})}
            onAnswer={(answer) => store.dispatch({answer, type: actions.ANSWER_ACTIVITY, levelId: id})}
          />
        );
      }

      return null;
    }
  };

  return Level;
};
