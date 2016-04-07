import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class AdminButtonTitle extends React.Component {
  render() {
    const {underlined} = this.props;
    const className = bembam("Admin-button-title", this.props.className)
      .mod("underlined", underlined);
    return (
      <div {...this.props} className={className.toString()}/>
    );
  }
}
