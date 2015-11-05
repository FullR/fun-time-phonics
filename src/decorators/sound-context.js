import React from "react";
import {transform, extend, invoke} from "lodash";
import Sound from "sound";

const soundCache = {};
let queue = Promise.resolve();

function enqueue(fn) {
  return (queue = queue.then(fn));
}

function sound(path) {
  // if(!soundCache.hasOwnProperty(path)) {
  //   soundCache[path] = new Sound({path});
  // }
  // return soundCache[path];
  return new Sound({path});
}

function fromSoundManifest(manifest) {
  return transform(manifest, (sounds, path, key) => {
    sounds[key] = sound(path);
  });
}

export default function soundContext(manifest={}, LoadingComponent) {
  return (Component) => class SoundContext extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: false
      };
      this.sounds = fromSoundManifest(manifest);
    }

    componentDidMount() {
      const load = () => Promise.all(invoke(this.sounds, "load")).then(() => {
        this.setState({
          loaded: true
        });
      }).catch(errorCatcher("Failed to load sounds"));
      enqueue(load);
    }

    stopAll() {
      const stop = () => Promise.all(invoke(this.sounds, "stop")).then(() => {
        if(this.props.soundContext) {
          this.props.soundContext.stopAll();
        }
      }).catch(errorCatcher("Failed to stop sounds"));
      return enqueue(stop);
    }

    unloadAll() {
      const unload = Promise.all(invoke(this.sounds, "unload")).catch(errorCatcher("Failed to unload sounds"));
      return enqueue(unload);
    }

    componentWillUnmount() {
      this.stopAll().then(::this.unloadAll);
    }

    render() {
      const {loaded} = this.state;
      const {props, sounds} = this;
      const extendedSounds = props.sounds ?
        extend({}, props.sounds, sounds) :
        sounds;

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
