import React from "react";
import classNames from "util/class-names";
import ReplayButton from "components/replay-button";
import Button from "components/button";
require("style/sound-frame.scss");

export default class SoundFrame extends React.Component {
  static defaultProps = {
    playable: true,
    sound: null,
    hidden: false,
    padding: "10%"
  };
  constructor(props) {
    super(props);
    this.state = {
      playing: props.sound && props.sound.playing
    };

    this._onPlay = () => this.setState({playing: true});
    this._onEnd = () => this.setState({playing: false});
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    if(this.props.sound) {
      this.props.sound.play().then(null, errorCatcher("Failed to play sound"));
    }
  }

  componentDidMount() {
    const {sound} = this.props;
    const {_onPlay, _onEnd} = this;
    if(sound) {
      sound.on("play", _onPlay);
      sound.on("end", _onEnd);
    }
  }

  componentWillUnmount() {
    const {sound} = this.props;
    const {_onPlay, _onEnd} = this;
    if(sound) {
      sound.removeListener("play", _onPlay);
      sound.removeListener("end", _onEnd);
    }
  }

  render() {
    const {sound, playable, hidden, onClick, disabled, padding, highlighted} = this.props;
    const {playing} = this.state;
    const className = classNames("Sound-frame", {
      "Sound-frame--playable": playable,
      "Sound-frame--hidden": hidden,
      "Sound-frame--highlighted": playing || highlighted
    });
    const contentStyle = {padding};

    return (
      <div {...this.props} className={className} onClick={null} disabled={null}>
        <div>
          <Button style={contentStyle} className="Sound-frame__content" onClick={this.props.onClick} disabled={disabled} cleared={true}>{this.props.children}</Button>
          <div className="Sound-frame__button-container">
            {playable ?
              <ReplayButton className="Sound-frame__Replay-button" onClick={this.playSound} active={playing}/> :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}
