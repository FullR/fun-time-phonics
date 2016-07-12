import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class Dash extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {className} = this.props;
    const classNames = cn("Dash", className);

    return (
      <span {...this.props} className={classNames}>-</span>
    );
  }
}
