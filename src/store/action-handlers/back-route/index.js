export default function backRoute(state) {
  return {
    ...state,
    route: state.lastRoute || "splash"
  };
}
