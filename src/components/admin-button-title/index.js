import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class AdminButtonTitle extends React.Component {
  static propTypes = {
    size: React.PropTypes.oneOf(["small", "medium", "large"])
  };

  static defaultProps = {
    size: "small"
  };

  render() {
    const {size, underlined} = this.props;
    const className = bembam("Admin-button-title", this.props.className)
      .mod(`size-${size}`)
      .mod("underlined", underlined);

    return (
      <div {...this.props} className={className.toString()}/>
    );
  }
}
