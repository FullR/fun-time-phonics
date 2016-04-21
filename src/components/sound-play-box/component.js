import React from "react";
import PlayBox from "components/play-box";
import soundPropObserver from "decorators/sound-prop-observer";

@soundPropObserver("sound", "playing")
export default class SoundPlayBox extends React.Component {
  render() {
    const {active, sound} = this.props;
    const {playing} = this.state;
    const onWaveClick = sound ? sound.play.bind(sound) : null;

    return (
      <PlayBox {...this.props} playing={playing} onWaveClick={onWaveClick}/>
    );
  }
}
