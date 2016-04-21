import React from "react";
import cn from "util/cn";

export default class XOverlay extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("X-overlay", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
