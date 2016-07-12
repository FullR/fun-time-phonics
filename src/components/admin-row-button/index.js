import React from "react";
import bembam from "bembam";
import AdminSectionRow from "components/admin-section-row";
import AdminSectionButton from "components/admin-section-button";
import pureUpdate from "pure-update";
require("./style.scss");

export default class AdminRowButton extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {name, index, onClick, selected, className, children} = this.props;
    const cn = bembam("Admin-row-button", className);
    return (
      <AdminSectionRow onClick={null} className={cn.toString()}>
        <AdminSectionButton className={cn.el("section-button")} onClick={onClick} selected={selected}>
          {children}
        </AdminSectionButton>
      </AdminSectionRow>
    );
  }
}
