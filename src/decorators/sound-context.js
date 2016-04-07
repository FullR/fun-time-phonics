import React from "react";
import {transform, extend, each, map} from "lodash";
import Sound from "sound";

const soundCache = {};
let queue = Promise.resolve();

function enqueue(fn) {
  return (queue = queue.then(fn));
}

function sound(path) {
  return new Sound({path});
}

function fromSoundManifest(manifest) {
  return transform(manifest, (sounds, path, key) => {
    sounds[key] = sound(path);
  });
}

export default function soundContext(manifest={}, LoadingComponent) {
  const sounds = fromSoundManifest(manifest);
  return (Component) => class SoundContext extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: false
      };
      this.sounds = sounds;
    }

    componentDidMount() {
      const load = () => Promise.all(map(this.sounds, (sound) => sound.load())).then(
        () => this.setState({loaded: true}),
        (error) => console.error("Failed to load sounds:", error)
      );
      enqueue(load);
    }

    stopAll() {
      each(this.sounds, (sound) => sound.stop());
      if(this.props.soundContext) {
        this.props.soundContext.stopAll();
      }
    }

    unloadAll() {
      each(this.sounds, (sound) => sound.unload());
    }

    componentWillUnmount() {
      this.stopAll();
      this.unloadAll();
    }

    getSound(id) {
      if(this.sounds.hasOwnProperty(id)) {
        return this.sounds[id];
      } else if(this.props.soundContext) {
        return this.props.soundContext.getSound(id);
      } else {
        return null;
      }
    }

    getSounds(...ids) {
      return ids.map(this.getSound.bind(this));
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
