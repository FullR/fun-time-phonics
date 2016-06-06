import React from "react";
import cn from "util/cn";
import store from "store";
import getLevelData from "store/helpers/get-level-data";
import getLevelMax from "store/helpers/get-level-max";
import toPercent from "util/to-percent";

export default class AdminButtonScore extends React.Component {
  render() {
    const {levelId, className} = this.props;
    const classNames = cn("Admin-button-score", className);

    const state = store.getState();
    const {score, complete} = getLevelData(state, levelId);
    const max = getLevelMax(levelId);

    if(!complete) return null;
    return (
      <div {...this.props} className={classNames}>
        {Math.floor(100 * toPercent(score, max)) / 100}%
      </div>
    );
  }
}
