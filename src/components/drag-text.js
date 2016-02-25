import React from "react";
import SoundFrame from "components/sound-frame";
import Draggable from "components/draggable";
import {VCenter} from "components/center";
import Letter from "components/letter";

export default class DragText extends React.Component {
  render() {
    return (
      <SoundFrame sound={this.props.sound} padding={0}>
        <Draggable width="80%" height="80%" style={{position: "absolute", left: "10%", top: "10%"}} value={this.props.value}>
          <VCenter style={{width: "100%"}}>
            <Letter>{this.props.children}</Letter>
          </VCenter>
        </Draggable>
      </SoundFrame>
    );
  }
}
