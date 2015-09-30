import React from "react";
require("style/activity-title.scss");

export default class ActivityTitle extends React.Component {
  render() {
    return <div className="Activity-title">{this.props.children}</div>
  }
}
