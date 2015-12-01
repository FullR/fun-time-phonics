import React from "react";
import {invoke, some, noop, each} from "lodash";
import Animation from "util/animation";
import bindMethods from "util/bind-methods";
const log = debug("tctc:animation-context");

export default function animationContext(Component) {
  return class AnimationContext extends React.Component {
    constructor(props) {
      super(props);
      this.state = {animating: false};
      this.animations = {};
      bindMethods(this, "create", "stop", "start", "isAnimating");
    }

    componentWillUnmount() {
      this.stop();
      this.animations = null;
    }

    get(id) {
      return this.animations[id];
    }

    create(id, ...steps) {
      if(this.animations[id]) {
        console.error(`An animation is already registered with the id ${id}. Overwriting`);
      }
      this.animations[id] = new Animation(steps);
      return this;
    }

    start(id, onCompleted) {
      const animation = this.get(id);
      if(this.isAnimating()) return () => {};
      this.setState({animating: true});
      if(!animation) {
        console.error(`Could not find animation with id ${id}`);
      } else {
        const observable = animation.start();
        const disposable = observable.subscribe(noop, (error) => {
          console.error(`Error during animation ${id}: ${error}`);
        }, () => {
          setTimeout(() => this.setState({animating: false}), 0);
          if(onCompleted) {
            setTimeout(onCompleted, 0);
          }
        });
        return disposable.dispose.bind(disposable);
      }
    }

    stop(id) {
      if(id) {
        const animation = this.get(id);
        if(animation) {
          animation.stop();
        }
      } else {
        Promise.all(invoke(this.animations, "stop")).catch((error) => {
          console.error(`Failed to stop animations: ${error}`);
        });
      }
    }

    isAnimating(id) {
      if(arguments.length) {
        return this.animations.hasOwnProperty(id) && this.animations[id].isAnimating();
      } else {
        return this.state.animating;
      }
    }

    render() {
      return (<Component {...this.props} animations={this}/>);
    }
  };
}
