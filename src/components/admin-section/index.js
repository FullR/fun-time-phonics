import React from "react";
import bembam from "bembam";
import pureUpdate from "pure-update";
require("./style.scss");

export default class AdminSection extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const className = bembam("Admin-section", this.props.className);
    return (
      <div className={className.toString()}>
        {this.props.children}
      </div>
    );
  }
}
