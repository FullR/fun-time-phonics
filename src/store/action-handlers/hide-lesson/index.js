import replaceWhere from "util/replace-where";
import assignCurrentUser from "store/helpers/assign-current-user";
import getUser from "store/helpers/get-user";

export default function hideLesson(state, {levelId}) {
  // return {
  //   ...state,
  //   levels: replaceWhere(state.levels,
  //     (level) => level.id === levelId,
  //     (level) => ({
  //       ...level,
  //       showingLesson: false
  //     })
  //   )
  // };

  const user = getUser(state);
  return assignCurrentUser(state, {
    levels: replaceWhere(user.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        showingLesson: false
      })
    )
  });
}
