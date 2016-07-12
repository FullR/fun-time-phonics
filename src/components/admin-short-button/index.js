import React from "react";
import bembam from "bembam";
import AdminSectionButton from "components/admin-section-button";
import pureUpdate from "pure-update";
require("./style.scss");

export default class AdminShortButton extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {hidden, className, onClick} = this.props;
    const cn = bembam("Admin-short-button", className)
      .mod("hidden", hidden);

    return (
      <AdminSectionButton {...this.props} className={cn.toString()} onClick={onClick} hidden={null}>
        {this.props.children}
      </AdminSectionButton>
    );
  }
}
