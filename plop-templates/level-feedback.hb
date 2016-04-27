import React from "react";
import ScoreScreen from "components/score-screen";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const {levelId, score, max} = this.props;
    return (
      <ScoreScreen {...this.props}>
        <Title>{{title}} Is Complete!</Title>
        <SubTitle>{levelId}</SubTitle>
        <Score score={score} max={max}/>
      </ScoreScreen>
    );
  }
}
