import level from "level";
import Lesson from "levels/2-sub/lesson";
import Activity from "levels/2-sub/activity";
import Response from "levels/2-sub/response";
import bindProps from "decorators/bind-props";

const exampleWords = ["off", "roof"];
const letter = "f";
const indexOffset = 9;

export default level({
  id: `2-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset})(Activity),
  Response: bindProps({exampleWords, indexOffset})(Response),
  activities: [
    {words: ["moth", "laugh", "office"], correct: "laugh"},
    {words: ["coffee", "bath", "cliff"], correct: "cliff", wordsOnly: true}
  ]
});
