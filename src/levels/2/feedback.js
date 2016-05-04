import React from "react";
import ScoreScreen from "components/score-screen";
import getLevelScore from "store/helpers/get-level-score";
import store from "store";
import actions from "store/actions";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const state = store.getState();
    const max = 15;
    const score = getLevelScore(state, "2") +
      getLevelScore(state, "2-d") +
      getLevelScore(state, "2-p") +
      getLevelScore(state, "2-k") +
      getLevelScore(state, "2-f") +
      getLevelScore(state, "2-m") +
      getLevelScore(state, "2-b");

    const onBack = () => {
      store.dispatch({type: actions.RESET_LEVEL, levelId: "2"});
      store.dispatch({type: actions.SHOW_LEVEL, levelId: "2"});
    };

    return (
      <ScoreScreen {...this.props} score={score} max={max} onBack={onBack}>
        <Title>{this.props.title} Is Complete!</Title>
        <Score score={score} max={max}/>
      </ScoreScreen>
    )
  }
}
