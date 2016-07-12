import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";
require("./style.scss");

export default class LockLink extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {className} = this.props;
    const classNames = cn("Lock-link", className);

    return (
      <a {...this.props} className={classNames}>
        <div className="Lock-link__icon"/>
        <div className="Lock-link__text">
          {this.props.children}
        </div>
      </a>
    );
  }
}
