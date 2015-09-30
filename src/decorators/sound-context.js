import React from "react";
import {extend, invoke} from "lodash";
import Sound from "sound";

export default function soundContext(manifest={}, LoadingComponent) {
  return (Component) => class SoundContext extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: false
      };
      this.sounds = Sound.many(manifest);
    }

    componentDidMount() {
      Promise.all(invoke(this.sounds, "load")).then(() => {
        this.setState({
          loaded: true
        });
      }, errorCatcher("Failed to load sounds"));
    }

    stopAll() {
      return Promise.all(invoke(this.sounds, "stop"));
    }

    unloadAll() {
      return Promise.all(invoke(this.sounds, "unload"));
    }

    componentWillUnmount() {
      this.stopAll().then(() => this.unloadAll());
    }

    render() {
      const {loaded} = this.state;
      const {props, sounds} = this;
      const extendedSounds = props.sounds ? extend({}, props.sounds, sounds) : sounds;

      if(loaded) {
        return <Component {...props} sounds={extendedSounds} soundContext={this}/>
      } else if(LoadingComponent) {
        return <LoadingComponent {...props}/>
      } else {
        return null;
      }
    }
  }
}
