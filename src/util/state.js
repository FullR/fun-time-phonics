import {extend, merge} from "lodash";

function extendState(component, ...sources) {
  component.setState(extend({}, ...sources));
}

function mergeState(component, ...sources) {
  component.setState(merge({}, component.state, ...sources));
}

export default {extendState, mergeState};
