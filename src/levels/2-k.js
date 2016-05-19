import level from "level";
import Lesson from "levels/2-sub/lesson";
import Activity from "levels/2-sub/activity";
import Response from "levels/2-sub/response";
import bindProps from "decorators/bind-props";

const exampleWords = ["duck", "lake"];
const letter = "k";
const indexOffset = 7;

export default level({
  id: `2-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset})(Activity),
  Response: bindProps({exampleWords, indexOffset})(Response),
  activities: [
    {words: ["truck", "tickle", "kite"], correct: "truck"},
    {words: ["kitchen", "pickle", "kick"], correct: "kick", wordsOnly: true}
  ]
});
