import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class Screen extends React.Component {
  shouldComponentUpdate = pureUpdate;
  render() {
    const {className} = this.props;
    const classNames = cn("Screen", className);

    return (
      <div {...this.props} className={classNames} title={null}/>
    );
  }
}
