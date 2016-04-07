import React from "react";
require("./style.scss");

export default class AdminHeader extends React.Component {
  render() {
    return (
      <div {...this.props} className="Admin-header"/>
    );
  }
}
