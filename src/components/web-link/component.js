import React from "react";
import cn from "util/cn";

export default class WebLink extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Web-link", className);

    return (
      <a {...this.props} className={classNames} target="_blank"/>
    );
  }
}
