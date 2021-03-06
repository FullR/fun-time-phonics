import React from "react";
import ScoreScreen from "components/score-screen";
import getLevelScore from "store/helpers/get-level-score";
import store from "store";
import actions from "store/actions";
const {Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const state = store.getState();
    const max = 15;
    const score = getLevelScore(state, "1") +
      getLevelScore(state, "1-g") +
      getLevelScore(state, "1-l") +
      getLevelScore(state, "1-m") +
      getLevelScore(state, "1-n") +
      getLevelScore(state, "1-r") +
      getLevelScore(state, "1-s");

    const onBack = () => {
      store.dispatch({type: actions.RESET_LEVEL, levelId: "1"});
      store.dispatch({type: actions.SHOW_LEVEL, levelId: "1"});
    };

    return (
      <ScoreScreen {...this.props} score={score} max={max} onBack={onBack}>
        <Title>{this.props.title} Is Complete!</Title>
        {this.props.children}
      </ScoreScreen>
    );
  }
}
