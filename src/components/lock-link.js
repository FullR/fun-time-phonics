import React from "react";
import classNames from "util/class-names";
require("style/lock-link.scss");

export default class LockLink extends React.Component {
  render() {
    const className = classNames(this.props.className, "Lock-link");
    return (
      <a {...this.props} className={className}>
        <div className="Lock-link__icon"/>
        <div className="Lock-link__text">
          {this.props.children}
        </div>
      </a>
    );
  }
}
