import replaceWhere from "util/replace-where";
import changeRoute from "../change-route";
import assignCurrentUser from "store/helpers/assign-current-user";
import getUser from "store/helpers/get-user";

export default function showLevel(state, {levelId}) {
  // return {
  //   ...changeRoute(state, {route: "current-level"}), // this action directly extends the effects of the change-route action
  //   currentLevelId: levelId,
  //   levels: replaceWhere(state.levels,
  //     (level) => level.id === levelId,
  //     (level) => ({
  //       ...level,
  //       started: true
  //     })
  //   )
  // };

  const user = getUser(state);
  return {
    ...assignCurrentUser(state, {
      currentLevelId: levelId,
      levels: replaceWhere(user.levels,
        (level) => level.id === levelId,
        (level) => ({
          ...level,
          started: true
        })
      )
    }),
    route: "current-level",
    lastRoute: state.route
  }
}
