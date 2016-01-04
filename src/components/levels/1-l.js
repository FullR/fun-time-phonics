import level1Sub from "components/levels/1-sub";
import hasher from "hasher";

export default level1Sub({
  phonic: "l",
  exampleWords: ["lock", "lion"],
  activityOffset: 5,
  onComplete() {
    hasher.setHash("level/1-n");
  },
  activities: [
    {words: ["ball", "pillow", "lip"], correct: "lip"},
    {words: ["leg", "bell", "fall"], correct: "leg", wordsOnly: true}
  ]
});
