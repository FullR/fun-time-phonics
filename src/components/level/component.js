import React from "react";
import store from "store";
import actions from "store/actions";
import storeListener from "decorators/store-listener";

export default ({
  id,
  activities
}) =>
class Level extends React.Component {
  componentDidMount() {
    store.dispatch({
      id,
      type: actions.VISIT_LEVEL
    });
    if(super.componentDidMount) {
      super.componentDidMount();
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   const {onComplete} = nextProps;
  //   if(onComplete && nextProps.activityIndex >= activities.length) {
  //     onComplete();
  //   }
  //
  //   if(super.componentWillReceiveProps) {
  //     super.componentWillReceiveProps(nextProps);
  //   }
  // }

  getCurrentActivity() {
    return activities[this.props.activityIndex];
  }

  checkAnswer(activity, currentAnswer) {
    return activity.correctAnswer === currentAnswer;
  }

  isCorrect() {
    const {currentAnswer} = this.props;
    const activity = this.getCurrentActivity();
    return activity && this.checkAnswer(activity, currentAnswer);
  }

  hideLesson() {
    store.dispatch({
      id,
      type: actions.HIDE_LESSON
    });
  }

  showLesson() {
    store.dispatch({
      id,
      type: actions.REVEAL_LESSON
    })
  }

  answerActivity(answer) {
    const {activityIndex} = this.props;
    const correct = this.isCorrect();
    store.dispatch({
      id,
      type: actions.ANSWER_ACTIVITY,
      answer, correct
    });
  }

  completeActivity() {
    store.dispatch({
      id,
      type: actions.COMPLETE_ACTIVITY
    });
  }
}
