import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class StarContainer extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {large, dark, padded, className} = this.props;
    const classNames = cn(
      "Star-container",
      large ? "Star-container--large" : null,
      dark ? "Star-container--dark" : null,
      padded ?  "Star-container--padded" : null,
      className
    );

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
