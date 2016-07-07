import React from "react";
import cn from "util/cn";

export default class UserNameLabel extends React.Component {
  render() {
    const {children, className} = this.props;
    const classNames = cn("User-name-label", className);

    return (
      <div {...this.props} className={classNames}>
        User:&nbsp;&nbsp;{children}
      </div>
    );
  }
}
