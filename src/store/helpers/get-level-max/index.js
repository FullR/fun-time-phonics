import levels from "levels";

export default function getLevelMax(levelId) {
  if(levels.hasOwnProperty(levelId)) {
    return levels[levelId].activityCount;
  }
  throw new Error(`No level with id "${levelId}"`);
}
