import storage from "storage";

export default function getLevelData(levelId) {
  return storage.get(`level-${levelId}`);
}
