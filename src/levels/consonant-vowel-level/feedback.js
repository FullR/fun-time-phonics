import React from "react";
import ScoreScreen from "components/score-screen";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const {levelId, score, max, consonant, vowel} = this.props;
    return (
      <ScoreScreen {...this.props}>
        <Title>Consonant "{consonant}" With Short Vowel "{vowel}" Is Complete!</Title>
        <SubTitle>Lesson {levelId}</SubTitle>
        <Score score={score} max={max}/>
      </ScoreScreen>
    );
  }
}
