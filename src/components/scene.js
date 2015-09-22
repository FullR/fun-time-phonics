import React from "react";
import Sound from "sound";
import {invoke} from "lodash";
import {extendState} from "util/state";

export default class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: !this.preload
    };
    const sounds = this.sounds = {};
    this.loader = {
      sound(id, paths) {
        sounds[id] = new Sound({paths});
      }
    };
  }

  componentDidMount() {
    if(this.preload) {
      Promise.resolve()
        .then(this.preload.bind(this, this.loader))
        .then(() => Promise.all(invoke(this.sounds, "load")))
        .then(() => {
          if(this.afterLoad) {
            this.afterLoad();
          }
          extendState(this, {loaded: true});
        });
    }
  }

  componentWillUnmount() {
    if(this.unload) {
      this.unload();
    }
    Promise.all(invoke(this.sounds, "unload"))
      .then(null, (error) => logError(`Failed to release sounds: ${error}`));
  }

  render() {
    if(this.state.loaded) {
      
    }
  }
}
