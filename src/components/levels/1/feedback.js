import React from "react";
import hasher from "hasher";
import LevelFeedback from "components/level-feedback";
import storage from "storage";

function getLevelScore(levelId) {
  const data = storage.get(`level-${levelId}`);
  if(!data) {
    return 0;
  } else {
    return data.score || 0;
  }
}

export default class Level1Score extends React.Component {
  getScore() {
    return ["1", "1-g", "1-l", "1-m", "1-n", "1-r", "1-s"]
      .map(getLevelScore)
      .reduce((a, b) => a + b, 0);
  }

  render() {
    return (
      <LevelFeedback 
        title="Beginning Sounds"
        subtitle="Lesson 1"
        score={this.getScore()}
        total={15}
        onBack={() => hasher.setHash("level/1")}
      />
    );
  }
}
