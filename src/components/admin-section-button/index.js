import React from "react";
import bembam from "bembam";
import AdminButtonIndex from "components/admin-button-index";
import AdminButtonTitle from "components/admin-button-title";
import pureUpdate from "pure-update";
require("./style.scss");

export default class AdminRowButton extends React.Component {
  static Index = AdminButtonIndex;
  static Title = AdminButtonTitle;
  shouldComponentUpdate = pureUpdate;
  render() {
    const {selected, review, assessment, disabled, className, onClick} = this.props;
    const cn = bembam("Admin-section-button", className)
      .mod("selected", selected)
      .mod("review", review)
      .mod("assessment", assessment)
      .mod("disabled", disabled);

    return (
      <div {...this.props} className={cn.toString()} onClick={onClick} hidden={null}>
        {this.props.children}
      </div>
    );
  }
}
