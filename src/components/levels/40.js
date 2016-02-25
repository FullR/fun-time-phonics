import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 40,
  letter: "f",
  vowel: "o",
  lessonWords: ["fox", "font", "fodder"],
  activityData: [
    {words: ["fence", "fix", "fox"], correct: "fox"},
    {words: ["factory", "follow", "felon"], correct: "follow", wordsOnly: true},
    {words: ["fiddle", "fasten", "fossil"], correct: "fossil", wordsOnly: true},
    {words: ["fond", "fit", "flop"], correct: "fond", wordsOnly: true},
    {words: ["fumble", "foxhole", "factory"], correct: "foxhole", wordsOnly: true}
  ]
});
