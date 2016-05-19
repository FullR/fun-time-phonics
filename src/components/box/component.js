import React from "react";
import cn from "util/cn";

export default class Box extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Box", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
