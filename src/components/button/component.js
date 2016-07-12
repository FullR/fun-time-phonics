import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class Button extends React.Component {
  static defaultProps = {
    color: "red",
    disabled: false
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {onClick, color, disabled, className, style, children} = this.props;
    const classNames = cn(
      "Button",
      !disabled ? `Button--color-${color}` : null,
      disabled ? "Button--disabled" : null,
      className
    );

    return (
      <button style={style} className={classNames} onClick={onClick}>
        {children}
      </button>
    );
  }
}
