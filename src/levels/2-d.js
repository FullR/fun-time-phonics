import level from "level";
import Lesson from "levels/2-sub/lesson";
import Activity from "levels/2-sub/activity";
import Response from "levels/2-sub/response";
import bindProps from "decorators/bind-props";

const exampleWords = ["kid", "bed"];
const letter = "d";
const indexOffset = 3;

export default level({
  id: `2-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset})(Activity),
  Response: bindProps({exampleWords, indexOffset})(Response),
  activities: [
    {words: ["dish", "radio", "mad"], correct: "mad"},
    {words: ["shade", "dive", "crab"], correct: "shade", shortInstructions: true}
  ],
  levelProps: {
    title: "Ending Sounds"
  }
});
