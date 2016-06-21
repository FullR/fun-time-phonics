import replaceWhere from "util/replace-where";
import assignCurrentUser from "store/helpers/assign-current-user";
import getUser from "store/helpers/get-user";

export default function showLesson(state, {levelId}) {
  // return {
  //   ...state,
  //   levels: replaceWhere(state.levels,
  //     (level) => level.id === levelId,
  //     (level) => ({
  //       ...level,
  //       showingLesson: true
  //     })
  //   )
  // };

  const user = getUser(state);
  return assignCurrentUser(state, {
    levels: replaceWhere(user.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        showingLesson: true
      })
    )
  });
}
