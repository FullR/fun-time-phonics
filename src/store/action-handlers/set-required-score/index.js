import assignCurrentUser from "store/helpers/assign-current-user";

export default function setRequiredScore(state, {requiredScore}) {
  return assignCurrentUser(state, {requiredScore});
}
