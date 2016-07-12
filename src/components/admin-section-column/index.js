import React from "react";
import bembam from "bembam";
import pureUpdate from "pure-update";
require("./style.scss");

export default class AdminSectionRow extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {className} = this.props;
    const cn = bembam("Admin-section-column", className);
    return (
      <div className={cn.toString()}>
        {this.props.children}
      </div>
    );
  }
}
