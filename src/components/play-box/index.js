import React from "react";
import DisplayBox from "../display-box";
import SoundWave from "../sound-wave";
import cn from "util/cn";
import pureUpdate from "pure-update";
require("./style.scss");

export default class PlayBox extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    detached: React.PropTypes.bool,
    waveHidden: React.PropTypes.bool,
    noWave: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onWaveClick: React.PropTypes.func,
    size: React.PropTypes.oneOf(["small", "medium", "large"])
  };

  static defaultProps = {
    active: false,
    hidden: false,
    detached: false,
    waveHidden: false,
    disabled: false,
    noWave: false,
    size: "large"
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {size, active, selected, playing, hidden, detached, waveHidden, noWave, onClick, onWaveClick, children, className} = this.props;
    const classNames = cn("Play-box",
      `Play-box--size-${size}`,
      hidden ? "Play-box--hidden" : null,
      detached ? "Play-box--detached" : null,
      noWave ? "Play-box--no-wave" : null,
      className
    );

    return (
      <div {...this.props} className={classNames} onClick={null} active={null} hidden={null}>
        <DisplayBox selected={selected} active={active || playing} onClick={onClick} className="Play-box__display-box">
          {children}
        </DisplayBox>

        <div className="Play-box__sound-wave-container">
          <SoundWave active={playing} onClick={onWaveClick} hidden={waveHidden}/>
        </div>
      </div>
    );
  }
}
