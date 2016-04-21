import React from "react";
import ScoreScreen from "components/score-screen";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const {score, max} = this.props;
    return (
      <ScoreScreen {...this.props}>
        <Title>Say the Word Is Complete!</Title>
        <SubTitle>Lesson 6</SubTitle>
        <Score score={score} max={max}/>
      </ScoreScreen>
    );
  }
}
