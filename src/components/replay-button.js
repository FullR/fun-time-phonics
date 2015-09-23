import React from "react";
import Button from "components/button";
import classNames from "util/class-names";
require("style/replay-button.scss");

export default class ReplayButton extends React.Component {
  render() {
    const {active, hidden} = this.props;
    const className = classNames(this.props.className, "Replay-button", {
      "Replay-button--active": active,
      "Replay-button--hidden": hidden
    });
    return <Button {...this.props} className={className} cleared={true} active={null}/>
  }
}
