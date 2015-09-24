import React from "react";
import {invoke, some, noop} from "lodash";
import Animation from "util/animation";
import bindMethods from "util/bind-methods";
const log = debug("tctc:animation-context");

export default function animationContext(Component) {
  return class AnimationContext extends React.Component {
    constructor(props) {
      super(props);
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
        logError(`An animation is already registered with the id ${id}. Overwriting`);
      }
      this.animations[id] = new Animation(...steps);
      return this;
    }

    start(id, onCompleted) {
      const animation = this.get(id);
      this.stop();
      if(!animation) {
        logError(`Could not find animation with id ${id}`);
      } else {
        log(`Starting animation: ${id}`);
        const disposable = animation.start().subscribe(noop, noop, onCompleted);
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
        invoke(this.animations, "stop");
      }
    }

    isAnimating(id) {
      if(id) {
        const animation = this.get(id);
        return animation && animation.isAnimating();
      } else {
        return some(this.animations, (animation) => animation.isAnimating());
      }
    }

    render() {
      return (<Component {...this.props} animations={this}/>);
    }
  };
}
