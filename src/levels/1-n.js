import level from "level";
import Lesson from "levels/1-sub/lesson";
import Activity from "levels/1-sub/activity";
import Response from "levels/1-sub/response";
import bindProps from "decorators/bind-props";

const exampleWords = ["nap", "neck"];
const letter = "n";

export default level({
  id: `1-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset: 7})(Activity),
  Response: bindProps({exampleWords, indexOffset: 7})(Response),
  activities: [
    {words: ["run", "ant", "nut"], correct: "nut"},
    {words: ["hand", "net", "bun"], correct: "net", shortInstructions: true}
  ],
  levelProps: {
    title: "Beginning Sounds"
  }
});
