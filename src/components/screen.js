import React from "react";
import classNames from "util/class-names";
require("style/screen.scss");

export default class Screen extends React.Component {
  render() {
    const className = classNames(this.props.className, "Screen");
    return (
      <div className={className}>
        <div {...this.props} className={null}/>
      </div>
    );
  }
}
