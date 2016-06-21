import React from "react";
import cn from "util/cn";

export default class Button extends React.Component {
  static defaultProps = {
    color: "red",
    disabled: false
  };

  render() {
    const {color, disabled, className} = this.props;
    const classNames = cn(
      "Button",
      !disabled ? `Button--color-${color}` : null,
      disabled ? "Button--disabled" : null,
      className
    );

    return (
      <button {...this.props} className={classNames} color={null}/>
    );
  }
}
