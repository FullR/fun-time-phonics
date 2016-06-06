import React from "react";
import bembam from "bembam";
import WebLink from "components/web-link";
require("./style.scss");

export default class InfoScreenFooter extends React.Component {
  render() {
    const {onBack, className} = this.props;
    const cn = bembam("Info-screen-footer", className);

    return (
      <div {...this.props} className={cn}>
        <div className={cn.el("tctc-info")}>
          © 2016 The Critical Thinking Co.™ {"•"} <WebLink href="http://criticalthinking.com/">www.CriticalThinking.com</WebLink> {"•"} 800-458-4849
        </div>
        <div className={cn.el("back-button")} onClick={onBack}>Back</div>
      </div>
    );
  }
}
