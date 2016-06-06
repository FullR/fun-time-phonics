import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "40",
  consonant: "f",
  vowel: "o",
  lessonWords: ["fox", "font", "fodder"],
  activities: [
    {words: ["fence", "fix", "fox"], correctWord: "fox"},
    {words: ["factory", "follow", "felon"], correctWord: "follow", shortInstructions: true},
    {words: ["fiddle", "fasten", "fossil"], correctWord: "fossil", shortInstructions: true},
    {words: ["fond", "fit", "flop"], correctWord: "fond", shortInstructions: true},
    {words: ["fumble", "foxhole", "factory"], correctWord: "foxhole", shortInstructions: true}
  ]
});
