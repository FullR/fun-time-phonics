import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class ActivityTitle extends React.Component {
  render() {
    const {className} = this.props;
    const cn = bembam("Activity-title", className);

    return (
      <div {...this.props} className={cn}/>
    );
  }
}
