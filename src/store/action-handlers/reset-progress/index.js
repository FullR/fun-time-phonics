import initialState from "../../initial-state";

export default function resetProgress(state) {
  return {...initialState, route: state.route};
}
