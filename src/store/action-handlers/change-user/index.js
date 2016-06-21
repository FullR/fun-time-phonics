export default function changeUser(state, {userName}) {
  return {
    ...state,
    currentUserId: userName
  };
}
