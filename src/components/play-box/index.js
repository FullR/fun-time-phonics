import React from "react";
import DisplayBox from "../display-box";
import SoundWave from "../sound-wave";
import cn from "util/cn";
require("./style.scss");

export default class PlayBox extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    detached: React.PropTypes.bool,
    waveHidden: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onWaveClick: React.PropTypes.func
  };

  static defaultProps = {
    active: false,
    hidden: false,
    detached: false,
    waveHidden: false,
    disabled: false
  };

  render() {
    const {active, selected, playing, hidden, detached, waveHidden, onClick, onWaveClick, children, className} = this.props;
    const classNames = cn("Play-box",
      hidden ? "Play-box--hidden" : null,
      detached ? "Play-box--detached" : null,
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
