import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class AdminSectionRow extends React.Component {
  render() {
    const {className} = this.props;
    const cn = bembam("Admin-section-row", className);
    return (
      <div {...this.props} className={cn.toString()}/>
    );
  }
}
