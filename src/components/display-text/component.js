import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class DisplayText extends React.Component {
  static propTypes = {
    size: React.PropTypes.oneOf(["small", "medium", "large"]),
    active: React.PropTypes.bool,
    hidden: React.PropTypes.bool
  };

  static defaultProps = {
    size: "large",
    active: false,
    hidden: false
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {size, active, hidden, children, className} = this.props;
    const classNames = cn(
      "Display-text",
      `Display-text--size-${size}`,
      active ? "Display-text--active" : null,
      hidden ? "Display-text--hidden" : null,
      className
    );

    return (
      <div {...this.props} className={classNames} hidden={null}/>
    );
  }
}
