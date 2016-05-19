import React from "react";
import cn from "util/cn";

const colors = ["green", "red", "blue", "black", "orange"];
const sizes = ["very-small", "small", "large"];

export default class Arrow extends React.Component {
  static propTypes = {
    color: React.PropTypes.oneOf(colors),
    size: React.PropTypes.oneOf(sizes),
    flipped: React.PropTypes.bool
  };

  static defaultProps = {
    color: "green",
    size: "small",
    flipped: false
  };

  render() {
    const {color, size, flipped, hidden, pulsing, className} = this.props;
    const classNames = cn(
      "Arrow",
      `Arrow--color-${color}`,
      `Arrow--size-${size}`,
      hidden ? "Arrow--hidden" : null,
      flipped ? "Arrow--flipped" : null,
      pulsing ? "Arrow--pulsing" : null,
      className
    );

    return (
      <div {...this.props} className={classNames} hidden={null}>
        <div className="Arrow__content">
          <div className="Arrow__image"/>
          <div className="Arrow__text">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
