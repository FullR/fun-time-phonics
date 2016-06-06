import replaceWhere from "util/replace-where";
import changeRoute from "../change-route";

export default function showLevel(state, {levelId}) {
  return {
    ...changeRoute(state, {route: "current-level"}), // this action directly extends the effects of the change-route action
    currentLevelId: levelId,
    levels: replaceWhere(state.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        started: true
      })
    )
  };
}
