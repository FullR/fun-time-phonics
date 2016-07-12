import React from "react";
import bembam from "bembam";
import pureUpdate from "pure-update";
require("./style.scss");

export default class AdminButtonTitle extends React.Component {
  static propTypes = {
    size: React.PropTypes.oneOf(["small", "medium", "large"])
  };

  static defaultProps = {
    size: "small"
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {children, size, underlined} = this.props;
    const className = bembam("Admin-button-title", this.props.className)
      .mod(`size-${size}`)
      .mod("underlined", underlined);

    return (
      <div className={className.toString()}>{children}</div>
    );
  }
}
