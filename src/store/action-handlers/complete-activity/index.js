import replaceWhere from "util/replace-where";

export default function completeActivity(state, {levelId}) {
  return {
    ...state,
    levels: replaceWhere(state.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        activityIndex: level.activityIndex + 1,
        currentAnswer: null
      })
    )
  };
};
