import React from "react";
import cn from "util/cn";

export default class Screen extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Screen", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
