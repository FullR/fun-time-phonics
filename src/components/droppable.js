import React from "react";
import {DropTarget} from "react-dnd";
import {DRAGGABLE} from "dnd-types";

const target = {
  drop(props, monitor) {
    if(props.onDrop) {
      if(!props.canDrop || props.canDrop()) {
        props.onDrop({
          droppable: props,
          draggable: monitor.getItem()
        });
      }
    }
  }
};

function connect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget(DRAGGABLE, target, connect)
export default class DropZone extends React.Component {
  static defaultProps = {
    width: "100%",
    height: "100%"
  };

  render() {
    const {connectDropTarget, width, height} = this.props;
    const style = {width, height, ...this.props.style};
    return connectDropTarget(<div {...this.props} style={style} onDrop={null}/>);
  }
}
