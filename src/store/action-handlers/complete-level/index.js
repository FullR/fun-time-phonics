import replaceWhere from "util/replace-where";
import levelList from "store/level-list";
import getNext from "util/get-next";
import assignCurrentUser from "store/helpers/assign-current-user";
import getUser from "store/helpers/get-user";

export default function completeLevel(state, {levelId}) {
  // return {
  //   ...state,
  //   currentLevelId: getNext(levelList, state.currentLevelId),
  //   levels: replaceWhere(state.levels,
  //     (level) => level.id === levelId,
  //     (level) => ({
  //       ...level,
  //       complete: true
  //     })
  //   )
  // };

  const user = getUser(state);
  return assignCurrentUser(state, {
    currentLevelId: getNext(levelList, user.currentLevelId),
    levels: replaceWhere(user.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        complete: true
      })
    )
  });
}
