import replaceWhere from "util/replace-where";
import assignCurrentUser from "store/helpers/assign-current-user";
import getUser from "store/helpers/get-user";

export default function visitLevel(state, {levelId}) {
  // return {
  //   ...state,
  //   lastLevel: levelId,
  //   levels: replaceWhere(state.levels,
  //     (level) => level.id === levelId,
  //     (level) => ({
  //       ...level,
  //       started: true
  //     })
  //   )
  // };

  const user = getUser(state);
  return assignCurrentUser(state, {
    levels: replaceWhere(user.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        started: true
      })
    )
  });
}
