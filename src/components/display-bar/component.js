import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

const positions = ["high-top", "top", "middle", "bottom", "low-bottom"];

export default class DisplayBar extends React.Component {
  static propTypes = {
    position: React.PropTypes.oneOf(positions)
  };

  static defaultProps = {
    position: "middle"
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {children, position, className} = this.props;
    const classNames = cn(
      "Display-bar",
      `Display-bar--position-${position}`,
      children ? `Display-bar--child-count-${children.length}` : null,
      className
    );

    return (
      <div {...this.props} className={classNames} position={null}/>
    );
  }
}
