import React from "react";
import classNames from "util/class-names";
import WebLink from "components/web-link";
require("style/critical-logo.scss");

export default class CriticalLogo extends React.Component {
  render() {
    const {size} = this.props;
    const className = classNames(this.props.className, "Critical-logo", size ? `Critical-logo--size-${size}` : null);
    return (<WebLink {...this.props} className={className} href="http://criticalthinking.com/"/>);
  }
}
