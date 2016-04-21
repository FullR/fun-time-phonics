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
      onDrop(value);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

@DropTarget(TYPE, target, collect)
export default class DropContainer extends React.Component {
  render() {
    const {connectDropTarget, className} = this.props;
    const classNames = cn("Drop-container", className);

    return connectDropTarget(
      <div {...this.props} className={classNames} onDrop={null}/>
    );
  }
}
