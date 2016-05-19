import React from "react";
import cn from "util/cn";

export default class AdminRowTitle extends React.Component {
  render() {
    const {hidden, children, className} = this.props;
    const classNames = cn("Admin-row-title", hidden ? "Admin-row-title--hidden" : null, className);

    return (
      <div {...this.props} className={classNames} hidden={null}>
        <div>{children}</div>
      </div>
    );
  }
}
