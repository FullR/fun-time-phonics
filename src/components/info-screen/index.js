import React from "react";
import bembam from "bembam";
import Screen from "components/screen";
import InfoScreenHeader from "components/info-screen-header";
import InfoScreenContent from "components/info-screen-content";
import InfoScreenFooter from "components/info-screen-footer";
import pureUpdate from "pure-update";
require("./style.scss");

export default class InfoScreen extends React.Component {
  static Header = InfoScreenHeader;
  static Content = InfoScreenContent;
  static Footer = InfoScreenFooter;
  shouldComponentUpdate = pureUpdate;
  render() {
    const {className} = this.props;
    const cn = bembam("Info-screen", className);

    return (
      <Screen {...this.props} className={cn}/>
    );
  }
}
