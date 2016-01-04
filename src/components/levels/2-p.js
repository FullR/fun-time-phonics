import level2Sub from "components/levels/2-sub";
import hasher from "hasher";

export default level2Sub({
  phonic: "p",
  exampleWords: ["hop", "cap"],
  activityOffset: 5,
  onComplete() {
    hasher.setHash("level/2-k");
  },
  activities: [
    {words: ["apple", "pear", "grape"], correct: "grape"},
    {words: ["crib", "lips", "slip"], correct: "slip", wordsOnly: true}
  ]
});
