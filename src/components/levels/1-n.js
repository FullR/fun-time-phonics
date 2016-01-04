import level1Sub from "components/levels/1-sub";
import hasher from "hasher";

export default level1Sub({
  phonic: "n",
  exampleWords: ["nap", "neck"],
  activityOffset: 7,
  onComplete() {
    hasher.setHash("level/1-r");
  },
  activities: [
    {words: ["run", "ant", "nut"], correct: "nut"},
    {words: ["hand", "net", "bun"], correct: "net", wordsOnly: true}
  ]
});
