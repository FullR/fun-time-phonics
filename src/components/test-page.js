import React from "react";
import {DragDropContext, DragSource} from "react-dnd";
import DraggableChoice from "components/draggable-choice";
import dndBackend from "dnd-backend";
import DropZone from "components/drop-zone";

@DragDropContext(dndBackend)
export default class TestPage extends React.Component {
  onDrop(value) {
    console.log("Dropped:", value);
  }

  render() {
    const dropZoneStyle = {width: 100, height: 100, border: "1px solid black"};

    return (
      <div>
        This is the test page.
        <DraggableChoice>Drag me</DraggableChoice>,
        <DropZone style={dropZoneStyle} onDrop={::this.onDrop}/>
      </div>
    );
  }
}
