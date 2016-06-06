import React from "react";
import cn from "util/cn";
import toPercent from "util/to-percent";

export default class ScoreScreenScore extends React.Component {
  render() {
    const {score, max, passing, className} = this.props;
    const classNames = cn(
      "Score-screen-score",
      `Score-screen-score--${passing ? "passing" : "failing"}`,
      className
    );
    const percent = Math.floor(toPercent(score, max));

    return (
      <div {...this.props} className={classNames}>
        Score {score}/{max}<br/>
        <span className="Score-screen-score__percent">{percent}%</span>
      </div>
    );
  }
}
