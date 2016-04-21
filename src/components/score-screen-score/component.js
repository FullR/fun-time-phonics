import React from "react";
import cn from "util/cn";
import toPercent from "util/to-percent";

export default class ScoreScreenScore extends React.Component {
  render() {
    const {score, max, className} = this.props;
    const classNames = cn("Score-screen-score", className);
    const percent = Math.floor(toPercent(score, max));

    return (
      <div {...this.props} className={classNames}>
        Score {percent}%<br/>
        {score}/{max}
      </div>
    );
  }
}
