import level from "level";
import Lesson from "levels/2-sub/lesson";
import Activity from "levels/2-sub/activity";
import Response from "levels/2-sub/response";
import activities from "./activities";
import bindProps from "decorators/bind-props";

const exampleWords = ["ham", "gum"];
const letter = "m";
const indexOffset = 11;

export default level({
  id: `2-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset})(Activity),
  Response: bindProps({exampleWords, indexOffset})(Response),
  activities
});
