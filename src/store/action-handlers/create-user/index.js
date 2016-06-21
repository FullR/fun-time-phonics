import getInitialLevels from "store/get-initial-levels";

export default function createUser(state, {userName}) {
  return {
    ...state,
    currentUserId: userName,
    users: {
      ...state.users,
      [userName]: {
        id: userName,
        name: userName,
        requiredScore: 85,
        currentLevelId: "1",
        levels: getInitialLevels()
      }
    }
  };
}
