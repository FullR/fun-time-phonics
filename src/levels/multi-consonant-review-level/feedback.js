import React from "react";
import ScoreScreen from "components/score-screen";
const {Score, SubTitle} = ScoreScreen;
const ScoreScreenTitle = ScoreScreen.Title;

export default class Feedback extends React.Component {
  render() {
    const {Title, levelId, score, max, letter} = this.props;
    return (
      <ScoreScreen {...this.props}>
        <ScoreScreenTitle><Title/> Is Complete!</ScoreScreenTitle>
        {this.props.children}
      </ScoreScreen>
    );
  }
}
