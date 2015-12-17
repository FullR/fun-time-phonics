import React from "react";
import classNames from "util/class-names";
require("style/teacher.scss");

export default class Teacher extends React.Component {
  static defaultProps = {
    size: "small",
    speaking: false,
    animating: false
  };
  render() {
    const {size, speaking, animating, centered} = this.props;
    const className = classNames("Teacher", `Teacher--size-${size}`, {
      "Teacher--speaking": speaking,
      "Teacher--animating": animating,
      "Teacher--centered": centered
    });

    return (
      <div {...this.props} className={className}>
        <div className="Teacher__image"/>
        <div className="Teacher__text">{this.props.text}</div>
      </div>
    );
  }
}
