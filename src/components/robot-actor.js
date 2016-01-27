import React from "react";
import Robot from "components/robot";
import classNames from "util/class-names";
require("style/robot-actor.scss");

export default class RobotActor extends React.Component {
  render() {
    const {type, centered, animating, speaking, text, hidden} = this.props;
    const className = classNames("Robot-actor", `Robot-actor--${type}`, {
      "Robot-actor--centered": centered,
      "Robot-actor--animating": animating,
      "Robot-actor--speaking": speaking,
      "Robot-actor--hidden": hidden
    });

    return (
      <Robot {...this.props} className={className}>
        <div style={{position: "relative", width: "100%", height: "100%"}}>
          <div className="Robot-actor__children">{text || ""}</div>
        </div>
      </Robot>
    );
  }
}
