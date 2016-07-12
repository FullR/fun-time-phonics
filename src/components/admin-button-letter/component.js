import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class AdminButtonLetter extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {children, size, className} = this.props;
    const classNames = cn(
      "Admin-button-letter",
      size ? `Admin-button-letter--size-${size}` : null,
      className
    );

    return (
      <span className={classNames}>{children}</span>
    );
  }
}
