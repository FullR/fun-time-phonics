import {transform} from "lodash";
import mergeState from "util/merge-state";

class ActorController {
  constructor(component, stateKey) {
    this.component = component;
    this.stateKey = stateKey;
  }

  merge(source) {
    const {component, stateKey} = this;
    mergeState(component, {
      [stateKey]: source
    });
  }

  set(k, v) {
    if(typeof k === "string") {
      this.merge({
        [k]: v
      });
    } else {
      this.merge(k);
    }
  }
}

export default function actorContainer(Wrapped) {
  return class ActorContainer extends Wrapped {
    get boy() {
      if(!this._boyActorController) {
        this._boyActorController = new ActorController(this, "boy");
      }
      return this._boyActorController;
    }

    get girl() {
      if(!this._girlActorController) {
        this._girlActorController = new ActorController(this, "girl");
      }
      return this._girlActorController;
    }
  };
}
