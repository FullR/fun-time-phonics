import React from "react";
import classNames from "util/class-names";
require("style/teacher.scss");

export default class Teacher extends React.Component {
  render() {
    const {size, speaking} = this.props;
    const className = classNames("Teacher", `Teacher--size-${size}`, {
      "Teacher--speaking": speaking
    });

    return (
      <div {...this.props} className={className}>
        <div className="Teacher__image"/>
        <div className="Teacher__text">{this.props.text}</div>
      </div>
    );
  }
}

Teacher.defaultProps = {
  size: "default",
  speaking: false
};
