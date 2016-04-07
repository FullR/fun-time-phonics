import React from "react";
import bembam from "bembam";
import {DragSource} from "react-dnd";
require("./style.scss");

const TYPE = "DRAG-CONTAINER";

const source = {
  beginDrag(props) {
    return {value: props.value};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

@DragSource(TYPE, source, collect)
export default class DragContainer extends React.Component {
  static propTypes = {
    value: React.PropTypes.any.isRequired
  };

  render() {
    const {className, connectDragSource} = this.props;
    const cn = bembam("Drag-container", className);

    return connectDragSource(
      <div {...this.props} className={cn.toString()} value={null}/>
    );
  }
}
