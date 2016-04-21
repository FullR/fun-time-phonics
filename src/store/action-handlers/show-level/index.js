export default function showLevel(state, {levelId}) {
  return {
    ...state,
    currentLevelId: levelId,
    route: "current-level"
  };
}
