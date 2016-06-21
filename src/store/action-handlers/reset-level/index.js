import replaceWhere from "util/replace-where";
import getInitialLevels from "store/get-initial-levels";
import assignCurrentUser from "store/helpers/assign-current-user";
import getUser from "store/helpers/get-user";

export default function resetLevel(state, {levelId}) {
  // levelId = levelId.split("-")[0];
  // return {
  //   ...state,
  //   levels: replaceWhere(state.levels,
  //     (level) => level.id.split("-")[0] === levelId,
  //     (toReplace) => ({
  //       ...initialState.levels.find((level) => level.id === toReplace.id),
  //       started: true
  //     })
  //   )
  // };

  levelId = levelId.split("-")[0];
  const user = getUser(state);
  return assignCurrentUser(state, {
    levels: replaceWhere(user.levels,
      (level) => level.id.split("-")[0] === levelId,
      (level) => ({
        ...getInitialLevels().find((l) => l.id === level.id),
        //...level,
        started: true
      })
    )
  });
}
