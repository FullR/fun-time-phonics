import React from "react";
import cn from "util/cn";

export default class StarContainer extends React.Component {
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
