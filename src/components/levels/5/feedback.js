import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  render() {
    return (
      <LevelFeedback {...this.props}
        title="Rhyme Time"
        subtitle="Lesson 5"
        score={getLevelScore("5")}
        total={19}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash("level/6")}
      />
    );
  }
}
