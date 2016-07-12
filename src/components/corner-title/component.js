import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class CornerTitle extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {className} = this.props;
    const classNames = cn("Corner-title", className);

    return (
      <div className={classNames}/>
    );
  }
}
