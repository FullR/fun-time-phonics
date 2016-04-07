import React from "react";

export default class Box extends React.Component {
  render() {
    const {width, height, style} = this.props;
    return <div {...this.props} style={{...style, width, height}}/>
  }
}
