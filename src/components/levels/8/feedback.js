import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  getScore() {
    return getLevelScore("8");
  }

  render() {
    return (
      <LevelFeedback {...this.props}
        title={"Find the Sound - Short \"a\""}
        subtitle="Lesson 8"
        score={this.getScore()}
        total={19}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash("level/9")}
      />
    );
  }
}
