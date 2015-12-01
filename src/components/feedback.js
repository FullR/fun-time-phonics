import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelScore from "util/get-level-score";
const noop = () => {};

export default class Feedback extends React.Component {
  static defaultProps = {
    title: "Title Undefined",
    subtitle: "Subtitle undefined",
    onBack: noop
  };

  getScore() {
    return getLevelScore(this.props.number.toString());
  }

  render() {
    const {title, number, activityCount, onBack} = this.props;
    const onNext = this.props.onNext || () => hasher.setHash(`level/${number + 1}`);
    return (
      <LevelFeedback
        title={title}
        subtitle={`Lesson ${number}`}
        score={this.getScore()}
        total={activityCount}
        onBack={onBack}
        onNext={onNext}
      />
    );
  }
}
