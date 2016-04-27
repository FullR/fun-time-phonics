import React from "react";
import cn from "util/cn";
import soundPropObserver from "decorators/sound-prop-observer";
import DisplayText from "components/display-text";

@soundPropObserver("sound", "playing")
export default class PlayableDisplayText extends React.Component {
  state = {playing: false};
  render() {
    const {className} = this.props;
    const {playing} = this.state;
    const classNames = cn("Playable-display-text", className);

    return (
      <DisplayText {...this.props} className={classNames} active={playing}/>
    );
  }
}
