import React from "react";
import ScoreScreen from "components/score-screen";
import getLevelScore from "store/helpers/get-level-score";
import store from "store";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const state = store.getState();
    const {score, max} = this.props;

    return (
      <ScoreScreen {...this.props}>
        <Title>Beginning and Ending Sounds Are Complete!</Title>
        <SubTitle>Lesson 1</SubTitle>
        <Score score={score} max={max}/>
      </ScoreScreen>
    )
  }
}
