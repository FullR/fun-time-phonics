import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";
import {number, title, activityCount} from "./info";

export default class Feedback extends React.Component {
  render() {
    return (
      <LevelFeedback
        title={title}
        subtitle={`Lesson ${number}`}
        score={getLevelScore(number.toString())}
        total={activityCount}
        onBack={this.props.onBack}
        onNext={() => hasher.setHash(`level/${number + 1}`)}
      />
    );
  }
}
