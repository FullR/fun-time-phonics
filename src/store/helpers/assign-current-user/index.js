import assignUser from "../assign-user";

export default function assignCurrentUser(state, props) {
  return assignUser(state, state.currentUserId, props);
}
