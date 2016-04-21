import replaceWhere from "util/replace-where";
import levelList from "store/level-list";
import getNext from "util/get-next";

export default function completeLevel(state, {levelId}) {
  return {
    ...state,
    currentLevelId: getNext(levelList, state.currentLevelId),
    levels: replaceWhere(state.levels,
      (level) => level.id === levelId,
      (level) => ({
        ...level,
        complete: true
      })
    )
  };
}
