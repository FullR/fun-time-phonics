import React from "react";
import ScoreScreen from "components/score-screen";
import getLevelScore from "store/helpers/get-level-score";
import store from "store";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const state = store.getState();
    const {title, levelId, score, max} = this.props;

    return (
      <ScoreScreen {...this.props}>
        <Title>{title} Are Complete!</Title>
      </ScoreScreen>
    )
  }
}
