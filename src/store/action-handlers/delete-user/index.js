import {pick} from "lodash";

export default function deleteUser(state, {userName}) {
  const usersNames = state.userNames;
  const remainingUserNames = usersNames.filter((n) => n !== userName);
  return {
    ...state,
    userNames: state.userNames.filter((name) => name !== userName),
    users: pick(state.users, remainingUserNames),
    currentUserId: state.currentUserId === userName ?
      remainingUserNames[0] :
      state.currentUserId
  };
}
