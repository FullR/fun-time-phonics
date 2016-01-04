import level1Sub from "components/levels/1-sub";
import hasher from "hasher";

export default level1Sub({
  phonic: "m",
  exampleWords: ["mom", "monkey"],
  activityOffset: 3,
  onComplete() {
    hasher.setHash("level/1-l");
  },
  activities: [
    {words: ["map", "jam", "hammer"], correct: "map"},
    {words: ["clam", "ram", "man"], correct: "man", wordsOnly: true}
  ]
});
