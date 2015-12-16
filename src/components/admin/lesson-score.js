import React from "react";
import storage from "storage";

function getLessonScore(levelId) {
  const data = storage.get(`level-${levelId}`);

  if(!data || !data.highscore) {
    return null;
  }

  return data.highscore;
}

function percent(value, total) {
  return Math.floor((value / total) * 100);
}

export default class LessonScore extends React.Component {
  render() {
    const {levelId} = this.props;
    const highscore = getLessonScore(levelId);
    if(!highscore) return null;
    return (
      <div {...this.props}>
        {percent(highscore.score, highscore.total)}%
      </div>
    );
  }
}
