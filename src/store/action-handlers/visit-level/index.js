import replaceWhere from "util/replace-where";

export default function visitLevel(state, {levelId}) {
  return {
    ...state,
    lastLevel: levelId,
    levels: replaceWhere(state.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        started: true
      })
    )
  };
}
