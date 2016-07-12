import React from "react";
import Robot from "../robot";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class Actor extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(["boy", "girl"]).isRequired
  };

  static defaultProps = {
    size: "small"
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {size, type, children, onClick, className} = this.props;
    const classNames = cn(
      "Actor",
      `Actor--${type}`,
      `Actor--size-${size}`,
      className
    );

    return (
      <Robot {...this.props} className={classNames} onClick={onClick}/>
    );
  }
}
