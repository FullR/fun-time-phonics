import React from "react";

export default class Dash extends React.Component {
  render() {
    return (<span {...this.props} style={{position: "relative", top: 3}}>-</span>);
  }
}
