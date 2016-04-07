import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  render() {
    return (
      <LevelFeedback {...this.props}
        title="Beginning and Ending Sounds"
        subtitle="Lesson 3"
        score={getLevelScore("3")}
        total={24}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash("level/4")}
        completeWord={"Are"}
      />
    );
  }
}
