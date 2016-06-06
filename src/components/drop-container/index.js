import React from "react";
import {DropTarget} from "react-dnd";
import cn from "util/cn";
require("./style.scss");

const TYPE = "DRAG-CONTAINER";

const target = {
  drop(props, monitor) {
    const {onDrop} = props;
    const {value} = (monitor.getItem() || {value: null});

    if(typeof onDrop === "function") {
      setTimeout(() => onDrop(value), 100);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget(TYPE, target, collect)
export default class DropContainer extends React.Component {
  static propTypes = {
    onDrop: React.PropTypes.func
  };

  render() {
    const {connectDropTarget, isOver, className} = this.props;
    const classNames = cn("Drop-container", isOver ? "Drop-container--over" : null, className);

    return connectDropTarget(
      <div {...this.props} className={classNames} onDrop={null} onDragEnter={null} onDragExit={null}/>
    );
  }
}
