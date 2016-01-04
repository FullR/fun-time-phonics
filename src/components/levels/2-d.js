import level2Sub from "components/levels/2-sub";
import hasher from "hasher";

export default level2Sub({
  phonic: "d",
  exampleWords: ["kid", "bed"],
  activityOffset: 3,
  onComplete() {
    hasher.setHash("level/2-p");
  },
  activities: [
    {words: ["dish", "radio", "mad"], correct: "mad"},
    {words: ["shade", "dive", "crab"], correct: "shade", wordsOnly: true}
  ]
});
