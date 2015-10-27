import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  getScore() {
    return ["2", "2-b", "2-d", "2-f", "2-k", "2-m", "2-p"]
      .map(getLevelScore)
      .reduce((a, b) => a + b, 0);
  }

  render() {
    return (
      <LevelFeedback 
        title="Ending Sounds"
        subtitle="Lesson 2"
        score={this.getScore()}
        total={15}
        onBack={() => hasher.setHash("level/2")}
        onNext={() => hasher.setHash("level/3")}
      />
    );
  }
}
