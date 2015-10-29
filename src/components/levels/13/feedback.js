import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  getScore() {
    return getLevelScore("13");
  }

  render() {
    return (
      <LevelFeedback 
        title="Short Sounds - Odd One Out"
        subtitle="Lesson 13"
        score={this.getScore()}
        total={20}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash("level/14")}
      />
    );
  }
}
