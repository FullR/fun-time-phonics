import React from "react";
import cn from "util/cn";

const positions = ["top", "middle", "bottom"];

export default class DisplayBar extends React.Component {
  static propTypes = {
    position: React.PropTypes.oneOf(positions)
  };

  static defaultProps = {
    position: "middle"
  };

  render() {
    const {children, position, className} = this.props;
    const classNames = cn(
      "Display-bar",
      `Display-bar--position-${position}`,
      `Display-bar--child-count-${children.length}`,
      className
    );

    return (
      <div {...this.props} className={classNames} position={null}/>
    );
  }
}
