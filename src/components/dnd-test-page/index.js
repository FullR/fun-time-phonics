import React from "react";
import bembam from "bembam";
import dndContext from "dnd-context";
import Screen from "components/screen";
import DraggableBox from "./draggable-box";
import CustomDragLayer from "./custom-drag-layer";

@dndContext
export default class DndTestPage extends React.Component {
  render() {
    return (
      <Screen>
        This is the dnd test page
        <DraggableBox width={50} height={25} color="green" dragColor="red"/>
        <DraggableBox width={90} height={44} color="blue" dragColor="green"/>
        <DraggableBox width={20} height={45} color="red"  dragColor="blue"/>
        <CustomDragLayer/>
      </Screen>
    );
  }
}
