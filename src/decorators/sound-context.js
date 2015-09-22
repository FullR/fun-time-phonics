import React from "react";
import {invoke} from "lodash";
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

    componentWillUnmount() {
      invoke(this.sounds, "stop");
      Promise.all(invoke(this.sounds, "unload"))
        .then(null, errorCatcher("Failed to unload sounds"));
    }

    render() {
      const {loaded} = this.state;
      const {props, sounds} = this;

      if(loaded) {
        return <Component {...props} sounds={this.sounds}/>
      } else if(LoadingComponent) {
        return <LoadingComponent {...props}/>
      } else {
        return null;
      }
    }
  }
}
