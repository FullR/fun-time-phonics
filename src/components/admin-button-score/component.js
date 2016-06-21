import React from "react";
import cn from "util/cn";
import store from "store";
import getLevelData from "store/helpers/get-level-data";
import getLevelMax from "store/helpers/get-level-max";
import getRequiredScore from "store/helpers/get-required-score";
import toPercent from "util/to-percent";

export default class AdminButtonScore extends React.Component {
  render() {
    const {levelId, className} = this.props;
    const state = store.getState();
    const max = getLevelMax(levelId);
    const {started, score, activityIndex} = getLevelData(state, levelId);
    const complete = max === activityIndex;
    const percent = toPercent(score, max);
    const classNames = cn(
      "Admin-button-score",
      `Admin-button-score--${started && percent >= getRequiredScore() ? "passed" : "failed"}`,
      className
    );

    if(!started) return null;
    return (
      <div {...this.props} className={classNames}>
        {complete ? `${Math.floor(percent)}%` : "Incomplete"}
      </div>
    );
  }
}
