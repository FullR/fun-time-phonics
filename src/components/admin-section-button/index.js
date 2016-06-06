import React from "react";
import bembam from "bembam";
import AdminButtonIndex from "components/admin-button-index";
import AdminButtonTitle from "components/admin-button-title";
require("./style.scss");

export default class AdminRowButton extends React.Component {
  static Index = AdminButtonIndex;
  static Title = AdminButtonTitle;
  render() {
    const {selected, review, assessment, disabled, className} = this.props;
    const cn = bembam("Admin-section-button", className)
      .mod("selected", selected)
      .mod("review", review)
      .mod("assessment", assessment)
      .mod("disabled", disabled);

    return (
      <div {...this.props} className={cn.toString()} disabled={null}/>
    );
  }
}
