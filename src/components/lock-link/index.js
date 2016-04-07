import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class LockLink extends React.Component {
  render() {
    const {className} = this.props;
    const cn = bembam("Lock-link", className);

    return (
      <a {...this.props} className={cn}>
        <div className={cn.el("icon")}/>
        <div className={cn.el("text")}>
          {this.props.children}
        </div>
      </a>
    );
  }
}
