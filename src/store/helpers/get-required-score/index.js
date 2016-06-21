import store from "store";

export default function getRequiredScore() {
  const {currentUserId, users} = store.getState();
  return users[currentUserId].requiredScore;
}
