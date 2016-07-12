import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class BeltItem extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {className} = this.props;
    const classNames = cn("Belt-item", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
