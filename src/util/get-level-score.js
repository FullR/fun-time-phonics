import storage from "storage";

export default function getLevelScore(levelId) {
  const data = storage.get(`level-${levelId}`);
  return data ? (data.score || 0) : 0;
}
