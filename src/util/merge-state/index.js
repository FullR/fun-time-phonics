import {merge} from "lodash";

export default function mergeState(component, ...sources) {
  component.setState(merge({}, component.state, ...sources));
}
