import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  getScore() {
    return getLevelScore("6");
  }

  render() {
    return (
      <LevelFeedback 
        title="Rhyme Time"
        subtitle="Lesson 6"
        score={this.getScore()}
        total={15}
        onBack={() => hasher.setHash("level/6")}
        onNext={() => hasher.setHash("level/7")}
      />
    );
  }
}
