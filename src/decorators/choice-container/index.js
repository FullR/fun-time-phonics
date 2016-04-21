import {transform} from "lodash";
import mergeState from "util/merge-state";
import replace from "util/replace";

function updateChoice(component, choice, source) {
  component.setState({
    choices: replace(component.state.choices, choice, Object.assign({}, choice, source))
  });
}

class ChoiceController {
  constructor(component, choiceId) {
    this.component = component;
    this.choiceId = choiceId;
  }

  merge(source) {
    const {component, choiceId} = this;
    component.setState({
      choices: component.state.choices.map((choice) =>
        choice.id === choiceId ?
          Object.assign({}, choice, source) :
          choice
      )
    });
  }

  set(k, v) {
    if(typeof k === "string") {
      this.merge({[k]: v});
    } else {
      this.merge(k);
    }
  }

  get(key) {
    return this.component.state.choices.find((choice) => choice.id === this.choiceId)[key];
  }
}

class ChoicesController {
  constructor(component) {
    this.component = component;
  }

  merge(source) {
    const {component} = this;
    component.setState({
      choices: component.state.choices.map((choice) => Object.assign({}, choice, source))
    });
  }

  set(k, v) {
    if(typeof k === "string") {
      this.merge({[k]: v});
    } else {
      this.merge(k);
    }
  }
}

export default function choiceContainer(Wrapped) {
  return class ChoiceContainer extends Wrapped {
    get choices() {
      if(!this._choiceControllers) {
        this._choiceControllers = transform(this.state.choices, (controllers, choice) => {
          controllers[choice.id] = new ChoiceController(this, choice.id);
        });
        const choiceControllers = Object.values(this._choiceControllers);
        const choiceControllerCount = choiceControllers.length;

        this._choiceControllers.all = new ChoicesController(this);
        this._choiceControllers[Symbol.iterator] = function* choiceControllerIterator() {
          for(let i = 0; i < choiceControllerCount; i++) {
            yield choiceControllers[i];
          }
        };
      }

      return this._choiceControllers;
    }
  };
}
