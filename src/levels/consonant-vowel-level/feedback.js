import React from "react";
import ScoreScreen from "components/score-screen";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const {levelId, score, max} = this.props;
    return (
      <ScoreScreen {...this.props}>
        <Title>Consonant &quot;b&quot; With Short Vowel &quot;a&quot; Is Complete!</Title>
        <SubTitle>Lesson {levelId}</SubTitle>
        <Score score={score} max={max}/>
      </ScoreScreen>
    );
  }
}
