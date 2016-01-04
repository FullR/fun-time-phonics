import level2Sub from "components/levels/2-sub";
import hasher from "hasher";

export default level2Sub({
  phonic: "f",
  exampleWords: ["off", "roof"],
  activityOffset: 9,
  onComplete() {
    hasher.setHash("level/2-m");
  },
  activities: [
    {words: ["moth", "laugh", "office"], correct: "laugh"},
    {words: ["coffee", "bath", "cliff"], correct: "cliff", wordsOnly: true}
  ]
});
