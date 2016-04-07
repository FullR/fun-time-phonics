import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class Button extends React.Component {
  render() {
    const {cleared, className} = this.props;
    const cn = bembam("Button", className)
      .mod("cleared", cleared);

    return (
      <div {...this.props} className={cn}/>
    );
  }
}
