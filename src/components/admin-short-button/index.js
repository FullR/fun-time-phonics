import React from "react";
import bembam from "bembam";
import AdminSectionButton from "components/admin-section-button";
require("./style.scss");

export default class AdminShortButton extends React.Component {
  render() {
    const {hidden, className} = this.props;
    const cn = bembam("Admin-short-button", className).mod("hidden", hidden);

    return (
      <AdminSectionButton {...this.props} className={cn.toString()} hidden={null}/>
    );
  }
}
