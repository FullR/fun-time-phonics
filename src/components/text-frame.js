import React from "react";
import SoundFrame from "components/sound-frame";
import {VCenter} from "components/center";
import Letter from "components/letter";

export default class TextFrame extends React.Component {
  render() {
    return (
      <SoundFrame sound={this.props.sound} padding={0}>
        <div style={{position: "relative", width: "100%", height: "100%"}}>
          <VCenter style={{width: "100%"}}>
            <Letter>{this.props.children}</Letter>
          </VCenter>
        </div>
      </SoundFrame>
    );
  }
}
