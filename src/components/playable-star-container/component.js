import React from "react";
import cn from "util/cn";
import StarContainer from "components/star-container";
import soundPropObserver from "decorators/sound-prop-observer";

@soundPropObserver("sound", "playing")
export default class PlayableStarContainer extends React.Component {
  render() {
    const dark = this.state.playing || this.props.dark;
    return (
      <StarContainer {...this.props} dark={dark}/>
    );
  }
}
