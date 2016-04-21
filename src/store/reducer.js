import {merge, isString} from "lodash";
import actionHandlers from "./action-handlers";
import initialState from "./initial-state";

export default function reducer(state=initialState, action={}) {
  if(actionHandlers.hasOwnProperty(action.type)) {
    console.time(`Action ${action.type}`);
    const newState = actionHandlers[action.type](state, action);
    console.timeEnd(`Action ${action.type}`);
    return newState;
  } else {
    console.log(`Unknown action type: ${action.type}`);
    return state;
  }
}
