import replaceWhere from "util/replace-where";

export default function showLevel(state, {levelId}) {
  return {
    ...state,
    currentLevelId: levelId,
    route: "current-level",
    levels: replaceWhere(state.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        started: true
      })
    )
  };
}
