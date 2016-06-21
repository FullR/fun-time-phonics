import replaceWhere from "util/replace-where";
import getUser from "store/helpers/get-user";
import assignCurrentUser from "store/helpers/assign-current-user";

export default function completeActivity(state, {levelId}) {
  // return {
  //   ...state,
  //   levels: replaceWhere(state.levels,
  //     (level) => level.id === levelId,
  //     (level) => ({
  //       ...level,
  //       activityIndex: level.activityIndex + 1,
  //       currentAnswer: null
  //     })
  //   )
  // };

  const user = getUser(state);
  return assignCurrentUser(state, {
    levels: replaceWhere(user.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        activityIndex: level.activityIndex + 1,
        currentAnswer: null
      })
    )
  });
};
