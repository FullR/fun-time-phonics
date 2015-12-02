import React from "react";
import SoundFrame from "components/sound-frame";
import Draggable from "components/draggable";
import {VCenter} from "components/center";
import Letter from "components/letter";

export default class DragText extends React.Component {
  render() {
    return (
      <SoundFrame sound={this.props.sound} padding={0}>
        <Draggable width="100%" height="100%" value={this.props.value}>
          <VCenter style={{width: "100%"}}>
            <Letter>{this.props.children}</Letter>
          </VCenter>
        </Draggable>
      </SoundFrame>
    );
  }
}
