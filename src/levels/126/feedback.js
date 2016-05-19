import React from "react";
import ScoreScreen from "components/score-screen";
import Balloon from "components/balloon";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const {levelId, title, score, max} = this.props;
    return (
      <ScoreScreen {...this.props} hideNext>
        <Title>{title} Is Complete!</Title>
        <Score score={score} max={max}/>

        <Balloon left="8%" duration={3.5} color="red"/>
        <Balloon left="13%" duration={2.75} color="blue"/>
        <Balloon right="8%" duration={3.15} color="green"/>
        <Balloon right="13%" duration={2.8} color="orange"/>
      </ScoreScreen>
    );
  }
}
