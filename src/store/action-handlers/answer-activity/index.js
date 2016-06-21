import replaceWhere from "util/replace-where";
import assignCurrentUser from "store/helpers/assign-current-user";
import getUser from "store/helpers/get-user";

export default function answerActivity(state, {levelId, answer}) {
  // return {
  //   ...state,
  //   levels: replaceWhere(state.levels,
  //     (level) => level.id === levelId,
  //     (level) => ({
  //       ...level,
  //       score: answer.correct ? level.score + 1 : level.score,
  //       currentAnswer: answer
  //     })
  //   )
  // };

  const user = getUser(state);
  return assignCurrentUser(state, {
    levels: replaceWhere(user.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        score: answer.correct ? level.score + 1 : level.score,
        currentAnswer: answer
      })
    )
  });
}
