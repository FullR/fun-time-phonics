export default function objectReducer(initialState={}, actionHandlers={}) {
  return function reducer(state=initialState, action={}) {
    const {type} = action;
    if(actionHandlers.hasOwnProperty(type)) {
      return actionHandlers[type](state, action);
    } else {
      return state;
    }
  };
}
