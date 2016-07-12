import React from "react";
import pureUpdate from "pure-update";
require("./style.scss");

export default class AdminHeader extends React.Component {
  shouldComponentUpdate = pureUpdate;
  render() {
    const {children} = this.props;
    return (
      <div className="Admin-header">
        {children}
      </div>
    );
  }
}
