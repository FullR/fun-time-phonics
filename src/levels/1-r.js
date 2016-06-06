import level from "level";
import Lesson from "levels/1-sub/lesson";
import Activity from "levels/1-sub/activity";
import Response from "levels/1-sub/response";
import bindProps from "decorators/bind-props";

const exampleWords = ["rat", "rain"];
const letter = "r";

export default level({
  id: `1-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset: 9})(Activity),
  Response: bindProps({exampleWords, indexOffset: 9})(Response),
  activities: [
    {words: ["dirt", "rug", "stir"], correct: "rug"},
    {words: ["red", "door", "church"], correct: "red", shortInstructions: true}
  ],
  levelProps: {
    title: "Beginning Sounds"
  }
});
