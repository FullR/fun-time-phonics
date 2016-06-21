import {range} from "lodash";

function level(id) {
  return {
    id: id.toString(),
    activityIndex: 0,
    score: 0,
    showingLesson: true,
    started: false,
    complete: false,
    currentAnswer: null
  };
}

// only need one copy since state is immutable
const initialLevelData = [
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
  ...range(3, 127).map(level)
];

export default function getInitialLevels() {
  return initialLevelData;
}
