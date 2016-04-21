import React from "react";
import cn from "util/cn";

export default class Underlined extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Underlined", className);

    return (
      <span {...this.props} className={classNames}/>
    );
  }
}
