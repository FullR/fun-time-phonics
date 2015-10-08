import React from "react";

export default class Corner extends React.Component {
  render() {
    const {top, left, bottom, right, zIndex} = this.props;
    const style = {
      top, left, bottom, right, zIndex,
      position: "absolute",
      ...this.props.style // overwrites
    };

    return (<div {...this.props} style={style}/>);
  }
}
