import level2Sub from "components/levels/2-sub";
import hasher from "hasher";

export default level2Sub({
  phonic: "m",
  exampleWords: ["ham", "gum"],
  activityOffset: 11,
  onComplete() {
    hasher.setHash("level/2-b");
  },
  activities: [
    {words: ["stamp", "swim", "milk"], correct: "swim"},
    {words: ["chin", "man", "crumb"], correct: "crumb", wordsOnly: true}
  ]
});
