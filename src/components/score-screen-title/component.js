import React from "react";
import cn from "util/cn";

export class ScoreScreenSubTitle extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Score-screen-sub-title", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}

export default class ScoreScreenTitle extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Score-screen-title", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}

ScoreScreenTitle.SubTitle = ScoreScreenSubTitle;
