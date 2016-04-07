import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class AdminButtonIndex extends React.Component {
  render() {
    const className = bembam("Admin-button-index", this.props.className);
    return (
      <div {...this.props} className={className.toString()}/>
    );
  }
}
