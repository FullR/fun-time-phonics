import React from "react";
import cn from "util/cn";

export default class TctcLogo extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Tctc-logo", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
