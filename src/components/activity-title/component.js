import React from "react";
import cn from "util/cn";

export default class ActivityTitle extends React.Component {
  render() {
    const {activityIndex, activityCount, children, className} = this.props;
    const classNames = cn("Activity-title", className);

    return (
      <div {...this.props} className={classNames}>
        {children} {activityIndex + 1} of {activityCount}
      </div>
    );
  }
}
