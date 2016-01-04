import level1Sub from "components/levels/1-sub";
import hasher from "hasher";

export default level1Sub({
  phonic: "r",
  exampleWords: ["rat", "rain"],
  activityOffset: 9,
  onComplete() {
    hasher.setHash("level/1-g");
  },
  activities: [
    {words: ["dirt", "rug", "stir"], correct: "rug"},
    {words: ["red", "door", "church"], correct: "red", wordsOnly: true}
  ]
});
