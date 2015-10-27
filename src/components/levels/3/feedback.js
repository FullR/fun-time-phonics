import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  getScore() {
    return getLevelScore("3");
  }

  render() {
    return (
      <LevelFeedback 
        title="Beginning and Ending Sounds"
        subtitle="Lesson 3"
        score={this.getScore()}
        total={24}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash("level/5")}
      />
    );
  }
}
