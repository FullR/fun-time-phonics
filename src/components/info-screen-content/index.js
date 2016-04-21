import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class InfoScreenContent extends React.Component {
  render() {
    const {className} = this.props;
    const cn = bembam("Info-screen-content", className);

    return (
      <div {...this.props} className={cn}/>
    );
  }
}
