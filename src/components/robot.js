import React from "react";
import classNames from "util/class-names";
require("style/robot-boy.scss");
require("style/robot-girl.scss");

export default class Robot extends React.Component {
  static defaultProps = {
    type: "boy",
    animating: false,
    size: "small"
  };

  render() {
    const {type, animating, speaking, glowing, size} = this.props;
    const baseClassName = `Robot-${type}`;
    const className = classNames(this.props.className, baseClassName, `${baseClassName}--${size}`, {
      [`${baseClassName}--animating`]: animating,
      [`${baseClassName}--idle`]: !animating,
      [`${baseClassName}--not-speaking`]: !speaking,
      [`${baseClassName}--glowing`]: glowing
    });

    return (
      <div {...this.props} type={null} className={className}/>
    );
  }
}
