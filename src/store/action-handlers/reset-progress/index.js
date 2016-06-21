import getInitialLevels from "store/get-initial-levels";
import assignCurrentUser from "store/helpers/assign-current-user";

export default function resetProgress(state) {
  return assignCurrentUser(state, {
    currentLevelId: "1",
    levels: getInitialLevels()
  });
}
