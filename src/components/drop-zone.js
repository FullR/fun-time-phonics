import React from "react";
import {DropTarget} from "react-dnd";
import {CHOICE} from "dnd-types";

const target = {
  drop(props, monitor) {
    if(typeof props.onDrop === "function") {
      props.onDrop(monitor.getItem());
    }
  }
};

function connect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget(CHOICE, target, connect)
export default class DropZone extends React.Component {
  render() {
    const {connectDropTarget} = this.props;
    return connectDropTarget(<div {...this.props}>{this.props.children}</div>);
  }
}
