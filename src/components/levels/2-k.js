import level2Sub from "components/levels/2-sub";
import hasher from "hasher";

export default level2Sub({
  phonic: "k",
  exampleWords: ["duck", "lake"],
  activityOffset: 7,
  onComplete() {
    hasher.setHash("level/2-f");
  },
  activities: [
    {words: ["truck", "tickle", "kite"], correct: "truck"},
    {words: ["kitchen", "pickle", "kick"], correct: "kick", wordsOnly: true}
  ]
});
