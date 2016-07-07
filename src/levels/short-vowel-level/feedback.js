import React from "react";
import ScoreScreen from "components/score-screen";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const {title, score, max, vowel, levelId} = this.props;
    return (
      <ScoreScreen {...this.props}>
        <Title>{title} Is Complete!</Title>
        {this.props.children}
      </ScoreScreen>
    );
  }
}
