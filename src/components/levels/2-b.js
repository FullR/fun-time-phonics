import level2Sub from "components/levels/2-sub";

export default level2Sub({
  phonic: "b",
  exampleWords: ["tub", "web"],
  activityOffset: 13,
  showScore: true,
  activities: [
    {words: ["bud", "grab", "map"], correct: "grab"},
    {words: ["trap", "globe", "boxer"], correct: "globe", wordsOnly: true}
  ]
});
