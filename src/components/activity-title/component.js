import React from "react";
import cn from "util/cn";

export default class ActivityTitle extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Activity-title", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
