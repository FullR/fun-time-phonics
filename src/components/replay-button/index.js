import React from "react";
import Button from "../button";
import bembam from "bembam";
require("./style.scss");

export default class ReplayButton extends React.Component {
  render() {
    const {active, hidden, className} = this.props;
    const cn = bembam("Replay-button", className)
      .mod("active", active)
      .mod("hidden", hidden);

    return (
      <Button {...this.props} className={cn} cleared={true} active={null}/>
    );
  }
}
