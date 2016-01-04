import level1Sub from "components/levels/1-sub";

export default level1Sub({
  phonic: "s",
  exampleWords: ["sit", "sister"],
  activityOffset: 13,
  showScore: true,
  activities: [
    {words: ["bus", "zoo", "sing"], correct: "sing"},
    {words: ["fish", "ship", "sled"], correct: "sled", wordsOnly: true}
  ]
});
