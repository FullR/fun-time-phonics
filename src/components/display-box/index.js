import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";
require("./style.scss");

export default class DisplayBox extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    selected: React.PropTypes.bool
  };

  static defaultProps = {
    active: false,
    selected: false
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {active, selected, onClick, className} = this.props;
    const classNames = cn("Display-box",
      active ? "Display-box--active" : null,
      selected ? "Display-box--selected" : null,
      onClick ? "Display-box--clickable" : null,
      className
    );

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
