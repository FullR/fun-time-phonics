import React from "react";
import getLevelData from "util/get-level-data";
import toPercent from "util/to-percent";

export default class LevelScore extends React.Component {
  static defaultProps = {
    format: "dash"
  };

  render() {
    const {levelId, format} = this.props;
    const data = getLevelData(levelId);
    if(data && data.activitiesComplete) {
      const {score = 0, total = 0} = data;
      switch(format) {
        case "dash": return (<div {...this.props}>{score}-{total - score}</div>);
        case "percent": return (<div {...this.props}>{toPercent(score, total)}%</div>);
        case "slash": // intentional fallthrough
        default: return (<div {...this.props}>{score}/{total}</div>);
      }
    } else {
      return null;
    }
  }
}
