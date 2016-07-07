import React from "react";
import cn from "util/cn";

export default class PrintPage extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Print-page", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
