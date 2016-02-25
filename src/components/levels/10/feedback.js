import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  render() {
    return (
      <LevelFeedback
        title={"Find the Sound - Short \"i\""}
        subtitle="Lesson 10"
        score={getLevelScore("10")}
        total={20}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash("level/11")}
      />
    );
  }
}
