import React from "react";
import cn from "util/cn";

export default class CornerTitle extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Corner-title", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
