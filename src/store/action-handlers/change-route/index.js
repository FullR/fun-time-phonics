export default function changeRoute(state, {route, routeProps={}}) {
  return {...state, route, routeProps, lastRoute: state.route};
}
