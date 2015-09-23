import React from "react";
import classNames from "util/class-names";
require("style/x-overlay.scss");

export default class XOverlay extends React.Component {
  render() {
    const className = classNames(this.props.className, "XOverlay");
    return <div {...this.props} className={className}/>
  }
}
