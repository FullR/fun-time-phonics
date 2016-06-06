import getLevelData from "../get-level-data";

export default function getLevelScore(state, levelId) {
  return getLevelData(state, levelId).score;
}
