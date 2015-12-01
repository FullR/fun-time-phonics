import React from "react";
import Choice from "components/choice";
import {DragSource} from "react-dnd";
import {CHOICE} from "dnd-types";

const dragSource = {
  beginDrag(props) {
    return {props};
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

@DragSource(CHOICE, dragSource, collect)
export default class DraggableChoice extends React.Component {
  static defaultProps = {
    autohide: true
  };

  render() {
    const {connectDragSource, disabled, autohide, isDragging} = this.props;
    const style = {
      display: "inline-block",
      cursor: disabled ? "default" : "pointer",
      visibility: autohide && isDragging ? "hidden" : "visible",
      ...this.props.style
    };

    return connectDragSource(
      <div style={style}>
        <Choice {...this.props}/>
      </div>
    );
  }
}
