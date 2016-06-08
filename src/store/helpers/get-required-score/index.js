import store from "store";

export default function getRequiredScore() {
  return store.getState().requiredScore;
}
