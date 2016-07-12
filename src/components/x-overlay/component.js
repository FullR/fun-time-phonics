import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class XOverlay extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {style, className} = this.props;
    const classNames = cn("X-overlay", className);

    return (
      <div style={style} className={classNames}/>
    );
  }
}
