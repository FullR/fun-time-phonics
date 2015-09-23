import React from "react";

export default class Corner extends React.Component {
  render() {
    const {top, left, bottom, right} = this.props;
    const style = {
      top, left, bottom, right,
      position: "absolute"
    };

    return (<div {...this.props} style={style}/>);
  }
}
