import React from "react";
import cn from "util/cn";

export default class Dash extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Dash", className);

    return (
      <span {...this.props} className={classNames}>-</span>
    );
  }
}
