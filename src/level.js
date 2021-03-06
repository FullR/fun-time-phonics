import React from "react";
import {noop} from "lodash";
import store from "store";
import actions from "store/actions";
import toPercent from "util/to-percent";
import storeListener from "decorators/store-listener";
import UserNameLabel from "components/user-name-label";
import Screen from "components/screen";

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
    static activityCount = activities.length; // used to find out max score when calculating percentages

    static propTypes = {
      onNext: React.PropTypes.func
    };

    static defaultProps = {
      onNext: noop
    };

    state = {
      activityInstructionsPlayed: false // used to insure the activity instructions are played at least once
    };

    componentWillReceiveProps(nextProps) {
      if(nextProps.activityIndex >= activities.length && !Feedback) {
        this.props.onNext();
      }
    }

    showLesson() {
      this.setState({activityInstructionsPlayed: false});
      store.dispatch({type: actions.SHOW_LESSON, levelId: id});
    }

    resetLevel() {
      store.dispatch({type: actions.RESET_LEVEL, levelId: id});
    }

    onAnswerActivity(answer) {
      if(!this.state.activityInstructionsPlayed) {
        this.setState({activityInstructionsPlayed: true});
      }
      store.dispatch({answer, type: actions.ANSWER_ACTIVITY, levelId: id});
    }

    onCompleteActivity() {
      store.dispatch({type: actions.COMPLETE_ACTIVITY, levelId: id});
    }

    componentDidMount() {
      store.dispatch({type: actions.VISIT_LEVEL, levelId: id});
    }

    render() {
      const {complete, activityIndex, showingLesson, currentAnswer, score, onNext, requiredScore, currentUserId} = this.props;
      const {activityInstructionsPlayed} = this.state;
      const maxScore = activities.length;
      const activityData = activities[activityIndex];
      const showLesson = this.showLesson.bind(this);

      switch(true) {
        case Lesson && showingLesson: return (
          <Lesson {...levelProps}
            activityIndex={activityIndex}
            onNext={act({type: actions.HIDE_LESSON, levelId: id})}
          >
            <UserNameLabel>{currentUserId}</UserNameLabel>
          </Lesson>
        );
        case !!currentAnswer: return (
          <Response {...levelProps} {...activityData}
            showLesson={showLesson}
            answer={currentAnswer}
            activityIndex={activityIndex}
            onNext={this.onCompleteActivity.bind(this)}
            currentUserId={currentUserId}
          >
            <UserNameLabel>{currentUserId}</UserNameLabel>
          </Response>
        );
        case Feedback && activityIndex >= activities.length: return (
          <Feedback {...levelProps}
            showLesson={showLesson}
            passing={toPercent(score, maxScore) >= requiredScore}
            onNext={onNext}
            onBack={this.resetLevel.bind(this)}
            score={score}
            requiredScore={requiredScore}
            max={activities.length}
            currentUserId={currentUserId}
          >
            <UserNameLabel>{currentUserId}</UserNameLabel>
          </Feedback>
        );
        case activityIndex < activities.length: return (
          <Screen className="Level-activity">
            <Activity {...levelProps} {...activityData}
              showLesson={showLesson}
              activityIndex={activityIndex}
              onShowLesson={act({type: actions.SHOW_LESSON, levelId: id})}
              onAnswer={this.onAnswerActivity.bind(this)}
              shortInstructions={activityData.shortInstructions && activityInstructionsPlayed}
              currentUserId={currentUserId}
            >
              <UserNameLabel>{currentUserId}</UserNameLabel>
            </Activity>
          </Screen>
        );
      }

      return null;
    }
  };

  return Level;
};
