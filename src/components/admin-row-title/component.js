import React from "react";
import cn from "util/cn";

export default class AdminRowTitle extends React.Component {
  render() {
    const {hidden, stretchContent, children, className} = this.props;
    const classNames = cn(
      "Admin-row-title",
      hidden ? "Admin-row-title--hidden" : null,
      // only used in admin section 1 to keep words from wrapping underneath the lesson index
      stretchContent ? "Admin-row-title--stretch-content" : null,
      className
    );

    return (
      <div {...this.props} className={classNames} hidden={null}>
        <div>{children}</div>
      </div>
    );
  }
}
