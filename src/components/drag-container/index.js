import React from "react";
import cn from "util/cn";
import {DragSource} from "react-dnd";
import {getEmptyImage} from "react-dnd-html5-backend";

require("./style.scss");

const TYPE = "DRAG-CONTAINER";

const source = {
  beginDrag({value, left, top, children, DragPreviewComponent}) {
    return {value, left, top, children, DragPreviewComponent};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

function getStyles(props) {
  const {left, top, isDragging} = props;
  const transform = `translate3d(${left}px, ${top}px, 0)`;

  return {
    transform: transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1
  };
}

@DragSource(TYPE, source, collect)
export default class DragContainer extends React.Component {
  static propTypes = {
    value: React.PropTypes.any
  };
  static defaultProps = {style: {}};

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const {className, isDragging, connectDragSource, style} = this.props;
    const classNames = cn(
      "Drag-container",
      isDragging ? "Drag-container--dragging" : null,
      className
    );

    return connectDragSource(
      <div {...this.props} className={classNames} value={null} style={{...style, ...getStyles(this.props)}}/>
    );
  }
}
