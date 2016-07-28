import React from "react";
import cn from "util/cn";
import {isElectron, isCordova} from "util/detect-platform";

export default class WebLink extends React.Component {
  onClick(event) {
    const {href} = this.props;
    if(isCordova()) {
      window.open(href, "_system");
    } else if(isElectron()) {
      const {shell} = require("electron");
      event.preventDefault();
      shell.openExternal(href);
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
