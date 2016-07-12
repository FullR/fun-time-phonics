import React from "react";

export default class Box extends React.Component {
  render() {
    const {width, height, color, dragColor, isDragPreview, children} = this.props;
    const style = {
      display: "inline-block",
      width, height,
      background: isDragPreview ? dragColor || color : color
    };

    return (
      <div style={style}>
        {children}
      </div>
    );
  }
}
