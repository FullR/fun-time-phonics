import React from "react";
import ScoreScreen from "components/score-screen";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const {levelId, score, max} = this.props;
    return (
      <ScoreScreen {...this.props}>
        <Title>Forming New Words Is Complete!</Title>
        <SubTitle>Lesson {levelId}</SubTitle>
        <Score score={score} max={max}/>
      </ScoreScreen>
    );
  }
}
