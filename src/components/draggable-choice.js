import React from "react";
import Choice from "components/choice";
import {DragSource} from "react-dnd";
import {CHOICE} from "dnd-types";

const dragSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource()
  };
}

@DragSource(CHOICE, dragSource, collect)
export default class DraggableChoice extends React.Component {
  render() {
    const {connectDragSource} = this.props;
    return connectDragSource(<div style={{display: "inline-block"}}><Choice {...this.props}/></div>);
  }
}
