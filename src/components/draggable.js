import React from "react";
import Choice from "components/choice";
import {DragSource} from "react-dnd";
import {DRAGGABLE} from "dnd-types";

const dragSource = {
  beginDrag(props) {
    return props;
  },

  canDrag(props) {
    return !props.disabled;
  }
};

function collect(connect, monitor) {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource()
  };
}

@DragSource(DRAGGABLE, dragSource, collect)
export default class DraggableChoice extends React.Component {
  static defaultProps = {
    autohide: true
  };

  render() {
    const {
      connectDragSource,
      autohide,
      isDragging,
      width,
      height
    } = this.props;

    const style = {
      width, height,
      visibility: autohide && isDragging ? "hidden" : null,
      display: "inline-block",
      ...this.props.style
    };

    return connectDragSource(
      <div {...this.props} style={style}/>
    );
  }
}
