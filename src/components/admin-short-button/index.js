import React from "react";
import bembam from "bembam";
import AdminSectionButton from "components/admin-section-button";
require("./style.scss");

export default class AdminShortButton extends React.Component {
  render() {
    const {className} = this.props;
    const cn = bembam("Admin-short-button", className);

    return (
      <AdminSectionButton {...this.props} className={cn.toString()}/>
    );
  }
}
