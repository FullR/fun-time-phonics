import React from "react";
import Button from "components/button";
require("style/splash-arrow.scss");

export default class SplashArrow extends React.Component {
  render() {
    return <Button {...this.props} cleared={true} className="SplashArrow"/>
  }
}
