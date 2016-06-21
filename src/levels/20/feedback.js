import React from "react";
import ScoreScreen from "components/score-screen";
const {Score, Title, SubTitle} = ScoreScreen;

export default class Feedback extends React.Component {
  render() {
    const {title, levelId, score, max} = this.props;
    return (
      <ScoreScreen {...this.props}>
        <Title>Review:&nbsp;&nbsp;{title} Is Complete!</Title>
      </ScoreScreen>
    );
  }
}
