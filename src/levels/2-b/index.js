import level from "level";
import Lesson from "levels/2-sub/lesson";
import Activity from "levels/2-sub/activity";
import Response from "levels/2-sub/response";
import Feedback from "levels/2/feedback";
import activities from "./activities";
import bindProps from "decorators/bind-props";

const exampleWords = ["tub", "web"];
const letter = "b";
const indexOffset = 13;

export default level({
  id: `2-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset})(Activity),
  Response: bindProps({exampleWords, indexOffset})(Response),
  Feedback,
  activities
});
