import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

const colors = ["green", "red", "blue", "black", "orange"];
const sizes = ["very-small", "small", "large"];

export default class Arrow extends React.Component {
  static propTypes = {
    color: React.PropTypes.oneOf(colors),
    size: React.PropTypes.oneOf(sizes),
    disabled: React.PropTypes.bool,
    flipped: React.PropTypes.bool
  };

  static defaultProps = {
    color: "green",
    size: "small",
    flipped: false
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {color, size, flipped, disabled, hidden, pulsing, onClick, style, className} = this.props;
    const classNames = cn(
      "Arrow",
      disabled ? "Arrow--color-gray" : `Arrow--color-${color}`,
      `Arrow--size-${size}`,
      hidden ? "Arrow--hidden" : null,
      flipped ? "Arrow--flipped" : null,
      pulsing ? "Arrow--pulsing" : null,
      className
    );

    return (
      <div className={classNames} style={style} onClick={onClick}>
        <div className="Arrow__content">
          <div className="Arrow__image"/>
          <div className="Arrow__text">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
