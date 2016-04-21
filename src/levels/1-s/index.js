import level from "level";
import Lesson from "levels/1-sub/lesson";
import Activity from "levels/1-sub/activity";
import Response from "levels/1-sub/response";
import Feedback from "levels/1/feedback";
import activities from "./activities";
import bindProps from "decorators/bind-props";

const exampleWords = ["sit", "sister"];
const letter = "s";

export default level({
  id: `1-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset: 13})(Activity),
  Response: bindProps({exampleWords, indexOffset: 13})(Response),
  Feedback,
  activities
});
