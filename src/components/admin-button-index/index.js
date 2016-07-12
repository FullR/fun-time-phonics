import React from "react";
import bembam from "bembam";
import pureUpdate from "pure-update";
require("./style.scss");

export default class AdminButtonIndex extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {children} = this.props;
    const className = bembam("Admin-button-index", this.props.className);
    return (
      <div className={className.toString()}>
        {children}
      </div>
    );
  }
}
