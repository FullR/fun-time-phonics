import replaceWhere from "util/replace-where";

export default function answerActivity(state, {levelId, answer}) {
  return {
    ...state,
    levels: replaceWhere(state.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        score: answer.correct ? level.score + 1 : level.score,
        currentAnswer: answer
      })
    )
  };
}
