import React from "react";
import classNames from "util/class-names";
require("style/fill.scss");

export default class Fill extends React.Component {
  render() {
    const className = classNames(this.props.className, "Fill");
    return <div {...this.props} className={className}/>
  }
}
