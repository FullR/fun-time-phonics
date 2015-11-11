import React from "react";
import classNames from "util/class-names";
require("style/button.scss");

export default class Button extends React.Component {
  render() {
    const className = classNames(this.props.className, "Button", {
      "Button--cleared": this.props.cleared
    });
    return (<button {...this.props} className={className}/>);
  }
}
