import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";
import {number, title, activityCount} from "./info";

export default class Feedback extends React.Component {
  getScore() {
    return getLevelScore(number.toString());
  }

  render() {
    return (
      <LevelFeedback
        title={title}
        subtitle={`Lesson ${number}`}
        score={this.getScore()}
        total={activityCount}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash(`level/${number + 1}`)}
      />
    );
  }
}
