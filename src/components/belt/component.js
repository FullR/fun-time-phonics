import React from "react";
import cn from "util/cn";

export default class Belt extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Belt", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
