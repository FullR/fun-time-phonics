import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";

export default class Feedback extends React.Component {
  render() {
    return (
      <LevelFeedback
        title="Rhyme Time"
        subtitle="Lesson 5"
        score={getLevelScore("5")}
        total={19}
        onBack={() => hasher.setHash("level/5")}
        onNext={() => hasher.setHash("level/6")}
      />
    );
  }
}
