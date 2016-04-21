import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class InfoScreenHeader extends React.Component {
  render() {
    const {className} = this.props;
    const cn = bembam("Info-screen-header", className);

    return (
      <div {...this.props} className={cn}/>
    );
  }
}
