import level from "level";
import Lesson from "levels/1-sub/lesson";
import Activity from "levels/1-sub/activity";
import Response from "levels/1-sub/response";
import activities from "./activities";
import bindProps from "decorators/bind-props";

const exampleWords = ["mom", "monkey"];
const letter = "m";

export default level({
  id: `1-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset: 3})(Activity),
  Response: bindProps({exampleWords, indexOffset: 3})(Response),
  activities
});
