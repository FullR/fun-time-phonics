import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "40",
  consonant: "f",
  vowel: "o",
  lessonWords: ["fox", "font", "fodder"],
  activities: [
    {words: ["fence", "fix", "fox"], correctWord: "fox"},
    {words: ["factory", "follow", "felon"], correctWord: "follow", wordsOnly: true},
    {words: ["fiddle", "fasten", "fossil"], correctWord: "fossil", wordsOnly: true},
    {words: ["fond", "fit", "flop"], correctWord: "fond", wordsOnly: true},
    {words: ["fumble", "foxhole", "factory"], correctWord: "foxhole", wordsOnly: true}
  ]
});
