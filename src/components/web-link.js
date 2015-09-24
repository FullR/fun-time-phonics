import React from "react";

export default class WebLink extends React.Component {
  render() {
    return (
      <a {...this.props} target="_blank"/>
    );
  }
}
