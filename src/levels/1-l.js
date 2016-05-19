import level from "level";
import Lesson from "levels/1-sub/lesson";
import Activity from "levels/1-sub/activity";
import Response from "levels/1-sub/response";
import bindProps from "decorators/bind-props";

const exampleWords = ["lock", "lion"];
const letter = "l";

export default level({
  id: `1-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset: 5})(Activity),
  Response: bindProps({exampleWords, indexOffset: 5})(Response),
  activities: [
    {words: ["ball", "pillow", "lip"], correct: "lip"},
    {words: ["leg", "bell", "fall"], correct: "leg", wordsOnly: true}
  ]
});
