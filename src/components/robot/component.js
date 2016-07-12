import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";
require("./style.scss");

export default class Robot extends React.Component {
  static propType = {
    type: React.PropTypes.string.isRequired,
    size: React.PropTypes.sting,
    animating: React.PropTypes.bool,
    speaking: React.PropTypes.bool,
    glowing: React.PropTypes.bool,
    showText: React.PropTypes.bool
  };

  static defaultProps = {
    size: "small",
    animating: false,
    speaking: false,
    glowing: false,
    showText: false
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {type, size, animating, speaking, glowing, noArm, showText, onClick, style, className, children} = this.props;
    const blockName = `Robot-${type}`;
    const classNames = cn(
      "Robot",
      `Robot--${size}`,
      showText ? `Robot--show-text` : null,
      noArm ? "Robot--no-arm" : null,
      blockName,
      `${blockName}--${size}`,
      `${blockName}--${animating ? "animating" : "idle"}`,
      speaking ? null : `${blockName}--not-speaking`,
      glowing ? `${blockName}--glowing` : null,
      className
    );

    return (
      <div className={classNames} onClick={onClick} style={style}>
        <div className="Robot__content">
          <div className="Robot__text">{children}</div>
        </div>
      </div>
    );
  }
}
