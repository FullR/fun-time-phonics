import replaceWhere from "util/replace-where";

export default function hideLesson(state, {levelId}) {
  return {
    ...state,
    levels: replaceWhere(state.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        showingLesson: false
      })
    )
  };
}
