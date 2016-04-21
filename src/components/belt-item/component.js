import React from "react";
import cn from "util/cn";

export default class BeltItem extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Belt-item", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
