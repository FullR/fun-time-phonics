import React from "react";
import classNames from "util/class-names";
require("style/belt.scss");

export default class Belt extends React.Component {
  static defaultProps = {
    bottom: "30%"
  };

  render() {
    const {top, bottom, left, right} = this.props;
    const className = classNames(this.props.className, "Belt");
    const style = {top, bottom, left, right};

    if(!left && !right) {
      style.width = "100%";
    }

    return (
      <div {...this.props} className={className} style={style}/>
    );
  }
}
