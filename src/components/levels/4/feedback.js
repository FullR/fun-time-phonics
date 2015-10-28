import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  getScore() {
    return getLevelScore("4");
  }

  render() {
    return (
      <LevelFeedback 
        title="Rhyme Match"
        subtitle="Lesson 4"
        score={this.getScore()}
        total={20}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash("level/5")}
      />
    );
  }
}
