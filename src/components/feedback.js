import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import getLevelData from "util/get-level-data";
const noop = () => {};

export default class Feedback extends React.Component {
  static defaultProps = {
    title: "Title Undefined",
    subtitle: "Subtitle undefined",
    onBack: noop
  };

  getScore() {
    const data = getLevelData(this.props.number) || {};
    return {score: data.score || 0, total: data.total || 0};
  }

  render() {
    const {title, number, activityCount, onBack} = this.props;
    const onNext = this.props.onNext || () => hasher.setHash(`level/${number + 1}`);
    const {score, total} = this.getScore();
    return (
      <LevelFeedback
        title={title}
        subtitle={`Lesson ${number}`}
        score={score}
        total={total}
        onBack={onBack}
        onNext={onNext}
      />
    );
  }
}
