import level1Sub from "components/levels/1-sub";
import hasher from "hasher";

export default level1Sub({
  phonic: "g",
  exampleWords: ["gate", "giggle"],
  activityOffset: 11,
  onComplete() {
    hasher.setHash("level/1-s");
  },
  activities: [
    {words: ["gum", "igloo", "bug"], correct: "gum"},
    {words: ["hug", "gym", "girl"], correct: "girl", wordsOnly: true}
  ]
});
