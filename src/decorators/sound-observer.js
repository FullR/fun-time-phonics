import React from "react";

export default function soundObserver(sound, playingPropKey="playing") {
  return (Wrapped) => class SoundObserver extends React.Component {
    constructor(props) {
      super(props);
      this.state = {playing: false};
      this.onStart = this.onStart.bind(this);
      this.onEnd = this.onEnd.bind(this);
    }

    onStart() {
      this.setState({playing: true});
    }

    onEnd() {
      this.setState({playing: false});
    }

    componentDidMount() {
      sound.on("start", this.onStart);
      sound.on("end", this.onEnd);
    }

    componentWillUnmount() {
      sound.removeListener("start", this.onStart);
      sound.removeListener("end", this.onEnd);
    }

    render() {
      const {playing} = this.state;
      if(playing) {
        return (<Wrapped {...this.props} {...{[playingPropKey]: true}}/>);
      } else {
        return (<Wrapped {...this.props}/>)
      }
    }
  };
}
