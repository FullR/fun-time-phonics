export default function assignUser(state, userId, props) {
  return {
    ...state,
    users: {
      ...state.users,
      [userId]: {
        ...state.users[userId],
        ...props
      }
    }
  };
}
