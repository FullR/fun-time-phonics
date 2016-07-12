import React from "react";
import bembam from "bembam";
import pureUpdate from "pure-update";
require("./style.scss");

export default class AdminSubGroup extends React.Component {
  shouldComponentUpdate = pureUpdate;
  render() {
    const className = bembam("Admin-sub-group", this.props.className)
      .mod("small", this.props.small);
    return (
      <div className={className.toString()}/>
    );
  }
}
