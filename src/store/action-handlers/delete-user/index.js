import {pick} from "lodash";

export default function deleteUser(state, {userName}) {
  const usersNames = Object.keys(state.users);
  return {
    ...state,
    users: pick(state.users, usersNames.filter((key) => key !== userName)),
    currentUserId: state.currentUserId === userName ?
      usersNames[0] :
      state.currentUserId
  };
}
