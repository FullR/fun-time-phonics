import React from "react";
import Button from "../button";
import bembam from "bembam";
require("./style.scss");

export default class Arrow extends React.Component {
  static defaultProps = {
    children: "Next"
  };
  render() {
    const {size, color, hidden, reversed, pulsing, className} = this.props;
    const cn = bembam("Arrow", className)
      .mod(`size-${size}`)
      .mod(`color-${color}`)
      .mod("reversed", reversed)
      .mod("hidden", hidden)
      .mod("pulsing", pulsing);

    return (
      <Button {...this.props} cleared={true} className={cn.toString()} hidden={null}>
        <div className={cn.el("content")}>
          <div className={cn.el("image")}/>
          <div className={cn.el("text")}>{this.props.children}</div>
        </div>
      </Button>
    );
  }
}
