import React from "react";
import cn from "util/cn";

export default class StarContainer extends React.Component {
  render() {
    const {large, dark, className} = this.props;
    const classNames = cn(
      "Star-container",
      large ? "Star-container--large" : null,
      dark ? "Star-container--dark" : null,
      className
    );

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
