import React from "react";
import cn from "util/cn";
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
    value: React.PropTypes.any
  };

  render() {
    const {className, connectDragSource} = this.props;
    const classNames = cn("Drag-container", className);

    return connectDragSource(
      <div {...this.props} className={classNames} value={null}/>
    );
  }
}
