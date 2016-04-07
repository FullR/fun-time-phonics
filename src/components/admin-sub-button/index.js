import React from "react";
import bembam from "bembam";
import AdminSectionButton from "components/admin-section-button";
require("./style.scss");

export default class AdminSubButton extends React.Component {
  onClick(event) {
    const {onClick} = this.props;
    if(event && event.stopPropagation) {
      event.stopPropagation();
    }
    if(onClick) {
      onClick(event);
    }
  }
  render() {
    const className = bembam("Admin-sub-button", this.props.className);
    return (
      <AdminSectionButton {...this.props} onClick={this.onClick.bind(this)} className={className.toString()}/>
    );
  }
}
