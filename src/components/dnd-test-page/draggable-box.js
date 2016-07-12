import React from "react";
import {DragSource} from "react-dnd";
import {getEmptyImage} from 'react-dnd-html5-backend';
import {BOX} from "./item-types";
import Box from "./box";

const boxSource = {
  beginDrag(props) {
    const { id, width, height, color, left, top, dragColor, children} = props;
    return { id, width, height, color, left, top, dragColor, children};
  }
}

function getStyles(props) {
  const {left, top, isDragging} = props;
  const transform = `translate3d(${left}px, ${top}px, 0)`;

  return {
    display: "inline-block",
    transform: transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1
  };
}

@DragSource(BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))
export default class DraggableBox extends React.Component {
  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const {connectDragSource} = this.props;
    return connectDragSource(
      <div style={getStyles(this.props)}>
        <Box {...this.props}/>
      </div>
    );
  }
}
