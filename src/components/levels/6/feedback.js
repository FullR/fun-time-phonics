import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  getScore() {
    return getLevelScore("6");
  }

  render() {
    const {onBack} = this.props;
    return (
      <LevelFeedback {...this.props}
        title="Say the Word"
        subtitle="Lesson 6"
        score={this.getScore()}
        total={15}
        onBack={onBack}
        onNext={() => hasher.setHash("level/7")}
      />
    );
  }
}
