import React from "react";

export default class Box extends React.Component {
  render() {
    const {width, height} = this.props;
    return <div {...this.props} style={{width, height}}/>
  }
}
