import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class ActivityTitle extends React.Component {
  shouldComponentUpdate = pureUpdate;
  render() {
    const {activityIndex, activityCount, children, className} = this.props;
    const classNames = cn("Activity-title", className);

    return (
      <div className={classNames}>
        {children} {activityIndex + 1} of {activityCount}
      </div>
    );
  }
}
