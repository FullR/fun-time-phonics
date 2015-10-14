import storage from "storage";

function getLevelScore(levelId) {
  const data = storage.get(`level-${levelId}`);
  if(!data) {
    return 0;
  } else {
    return data.score || 0;
  }
}
