import React from "react";
import {DragLayer} from "react-dnd";

const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  zIndex: 100,
  left: 0,
  top: 0
};

function getItemStyles(props) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  let { x, y } = currentOffset;

  if (props.snapToGrid) {
    x -= initialOffset.x;
    y -= initialOffset.y;
    [x, y] = snapToGrid(x, y);
    x += initialOffset.x;
    y += initialOffset.y;
  }

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform: transform,
    WebkitTransform: transform
  };
}

@DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))
export default class CustomDragLayer extends React.Component {
  render() {
    const {item, itemType, isDragging} = this.props;
    if (!isDragging || !item) return null;
    const {DragPreviewComponent} = item;
    if(!DragPreviewComponent) return null;
    return (
      <div style={layerStyles}>
        <div style={getItemStyles(this.props)}>
          <DragPreviewComponent {...item}/>
        </div>
      </div>
    );
  }
}
