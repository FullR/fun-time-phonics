import React from "react";
import classNames from "util/class-names";
import bembam from "bembam";
require("style/screen.scss");

export default class Screen extends React.Component {
  render() {
    const className = bembam("Screen", this.props.className);
    return (
      <div {...this.props} className={className.toString()} title={null}/>
    );
  }
}
