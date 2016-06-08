import React from "react";
import cn from "util/cn";
import {isElectron} from "util/detect-platform";

export default class WebLink extends React.Component {
  onClick(event) {
    if(isElectron()) {
      const {shell} = require("electron");
      event.preventDefault();
      shell.openExternal(this.props.href);
    }
  }

  render() {
    const {className} = this.props;
    const classNames = cn("Web-link", className);

    return (
      <a {...this.props} className={classNames} target="_blank" onClick={this.onClick.bind(this)}/>
    );
  }
}
