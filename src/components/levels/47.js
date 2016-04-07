import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  title: "Consonant \"g\" With Short Vowels Review",
  number: 47,
  lessonLetters: ["ga", "go", "gu"],
  lessonWords: ["gas", "god", "gush"],
  activityData: [
    {word: "gum", letters: ["go", "gu", "ga"], correct: "gu"},
    {word: "gag", letters: ["ga", "go", "gu"], correct: "ga", wordsOnly: true},
    {word: "goggles", letters: ["ga", "gu", "go"], correct: "go", wordsOnly: true},
    {word: "gutter", letters: ["gu", "go", "ga"], correct: "gu", wordsOnly: true},
    {word: "gavel", letters: ["ga", "go", "gu"], correct: "ga", wordsOnly: true},
    {word: "gobble", letters: ["gu", "ga", "go"], correct: "go", wordsOnly: true}
  ]
});
