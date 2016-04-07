import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class AdminSubGroup extends React.Component {
  render() {
    const className = bembam("Admin-sub-group", this.props.className)
      .mod("small", this.props.small);
    return (
      <div {...this.props} className={className.toString()}/>
    );
  }
}
