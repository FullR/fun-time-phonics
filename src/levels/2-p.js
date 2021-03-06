import level from "level";
import Lesson from "levels/2-sub/lesson";
import Activity from "levels/2-sub/activity";
import Response from "levels/2-sub/response";
import bindProps from "decorators/bind-props";

const exampleWords = ["hop", "cap"];
const letter = "p";
const indexOffset = 5;

export default level({
  id: `2-${letter}`,
  Lesson: bindProps({words: exampleWords, letter})(Lesson),
  Activity: bindProps({exampleWords, indexOffset})(Activity),
  Response: bindProps({exampleWords, indexOffset})(Response),
  activities: [
    {words: ["apple", "pear", "grape"], correct: "grape"},
    {words: ["crib", "lips", "slip"], correct: "slip", shortInstructions: true}
  ],
  levelProps: {
    title: "Ending Sounds"
  }
});
