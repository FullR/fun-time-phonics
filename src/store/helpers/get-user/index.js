export default function getUser(state, userId=state.currentUserId) {
  return state.users[userId];
}
