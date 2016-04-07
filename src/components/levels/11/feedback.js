import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  render() {
    return (
      <LevelFeedback {...this.props}
        title={"Find the Sound - Short \"o\""}
        subtitle="Lesson 11"
        score={getLevelScore("11")}
        total={20}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash("level/12")}
      />
    );
  }
}
