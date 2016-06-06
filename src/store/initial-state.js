import {range} from "lodash";

function level(id) {
  return {
    id,
    activityIndex: 0,
    score: 0,
    showingLesson: true,
    started: false,
    complete: false,
    currentAnswer: null
  };
}

export default {
  route: "splash",
  currentLevelId: "1",
  requiredScore: 85,
  levels: [
    level("1"),
    level("1-m"),
    level("1-l"),
    level("1-n"),
    level("1-r"),
    level("1-g"),
    level("1-s"),
    level("2"),
    level("2-d"),
    level("2-p"),
    level("2-k"),
    level("2-f"),
    level("2-m"),
    level("2-b"),
    ...range(3, 127).map((levelId) => level(levelId.toString()))
  ]
};
