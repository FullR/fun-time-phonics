export default function getLevelData(state, levelId) {
  const {users, currentUserId} = state;
  return users[currentUserId].levels.find((level) => level.id === levelId);
}
