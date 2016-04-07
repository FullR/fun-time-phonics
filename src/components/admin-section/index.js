import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class AdminSection extends React.Component {
  render() {
    const className = bembam("Admin-section", this.props.className);
    return (
      <div {...this.props} className={className.toString()}/>
    );
  }
}
