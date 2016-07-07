export default function getUser(state, userId) {
  return state.users[userId || state.currentUserId];
}
