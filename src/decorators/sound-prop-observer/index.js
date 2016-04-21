/*
  Enables a component to receive a sound as a prop and monitor the play state of the sound.

  `propKey` defines which prop key the component expects the sound on
  `stateKey` defines which state key the play state should be stored in
*/
export default function soundPropObserver(propKey="sound", stateKey="playing") {
  return (Wrapped) => class SoundPropObserver extends Wrapped {
    constructor(props) {
      super(props);
      this._onStart = this._onStart.bind(this);
      this._onEnd = this._onEnd.bind(this);
      this.state = {[stateKey]: props[propKey] && props[propKey].playing};
    }

    _subscribe(sound) {
      sound.on("start", this._onStart);
      sound.on("end", this._onEnd);
    }

    _unsubscribe(sound) {
      sound.removeListener("start", this._onStart);
      sound.removeListener("end", this._onEnd);
    }

    _onStart() {
      this.setState({[stateKey]: true});
    }

    _onEnd() {
      this.setState({[stateKey]: false});
    }

    componentWillMount() {
      if(this.props[propKey]) {
        this._subscribe(this.props[propKey]);
      }
      if(super.componentWillMount) {
        super.componentWillMount();
      }
    }

    // handle changing sounds
    componentWillReceiveProps(nextProps) {
      if(nextProps[propKey] !== this.props[propKey]) {
        if(this.props[propKey]) {
          this._unsubscribe(this.props[propKey]);
        }
        if(nextProps[propKey]) {
          this._subscribe(nextProps[propKey]);
          this.setState({
            [stateKey]: nextProps[propKey].playing
          });
        }
      }
      if(super.componentWillReceiveProps) {
        super.componentWillReceiveProps(nextProps);
      }
    }
  };
}
