import React from "react";
import DraggableChoice from "components/draggable-choice";
const contentStyle = {
  fontSize: 250,
  height: "100%",
  width: "100%",
  lineHeight: "300px",
  textAlign: "center"
};

export default class DragLetter extends React.Component {
  render() {
    const {letter} = this.props;
    return (
      <DraggableChoice {...this.props} value={letter} autohide>
        <div style={contentStyle}>{letter}</div>
      </DraggableChoice>
    );
  }
}
