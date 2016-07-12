import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class Letters extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {className} = this.props;
    const classNames = cn("Letters", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
