export default function getLevelData(state, levelId) {
  return state.levels.find((level) => level.id === levelId);
}
