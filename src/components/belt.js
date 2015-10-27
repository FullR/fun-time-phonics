import React from "react";
import classNames from "util/class-names";
require("style/belt.scss");

export default class Belt extends React.Component {
  render() {
    const {top, bottom, left, right} = this.props;
    const className = classNames(this.props.className, "Belt");
    const style = {top, bottom, left, right};

    if(!left && !right) {
      style.width = "100%";
    }

    if(!top && !bottom) {
      style.bottom = "30%";
    }

    return (
      <div {...this.props} className={className} style={style}/>
    );
  }
}
