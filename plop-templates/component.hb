import React from "react";
import bembam from "bembam";
require("./style.scss");

export default class {{pascalCase name}} extends React.Component {
  render() {
    const {className} = this.props;
    const cn = bembam("{{upperDashCase name}}", className);

    return (
      <div {...this.props} className={cn}/>
    );
  }
}
