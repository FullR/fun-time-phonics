import replaceWhere from "util/replace-where";
import initialState from "../../initial-state";

export default function resetLevel(state, {levelId}) {
  levelId = levelId.split("-")[0];
  return {
    ...state,
    levels: replaceWhere(state.levels,
      (level) => level.id.split("-")[0] === levelId,
      (toReplace) => initialState.levels.find((level) => level.id === toReplace.id)
    )
  };
}
