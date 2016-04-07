import React from "react";
import bembam from "bembam";

export default class Underlined extends React.Component {
  render() {
    return (<span {...this.props} style={{textDecoration: "underline"}}/>);
  }
}
