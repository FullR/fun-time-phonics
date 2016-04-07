import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  getScore() {
    return getLevelScore("7");
  }

  render() {
    const {onBack} = this.props;
    return (
      <LevelFeedback {...this.props}
        title="Echo the Word"
        subtitle="Lesson 7"
        score={this.getScore()}
        total={19}
        onBack={onBack}
        onNext={() => hasher.setHash("level/8")}
      />
    );
  }
}
