import React from "react";
import Button from "components/button";
require("style/arrow.scss");

export default class Arrow extends React.Component {
  render() {
    return <Button {...this.props} cleared={true} className="Arrow"/>
  }
}
