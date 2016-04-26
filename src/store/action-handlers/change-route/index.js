export default function changeRoute(state, {route}) {
  return {...state, route, lastRoute: state.route};
}
