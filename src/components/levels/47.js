import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  title: "Consonant 'g' With Short Vowels",
  number: 47,
  lessonLetters: ["ga", "ge", "gi", "go", "gu"],
  lessonWords: ["gas", "gecko", "gift", "god", "gush"],
  activityData: [
    {word: "gum", letters: ["go", "gu", "gi"], correct: "gu"},
    {word: "gag", letters: ["ga", "go", "gu"], correct: "ga", wordsOnly: true},
    {word: "goggles", letters: ["ga", "gu", "go"], correct: "go", wordsOnly: true},
    {word: "gift", letters: ["ge", "gi", "gu"], correct: "gi", wordsOnly: true},
    {word: "gutter", letters: ["gu", "go", "ga"], correct: "gu", wordsOnly: true},
    {word: "gavel", letters: ["ga", "ge", "gi"], correct: "ga", wordsOnly: true},
    {word: "gobble", letters: ["gu", "gi", "go"], correct: "go", wordsOnly: true},
    {word: "gecko", letters: ["gi", "ga", "ge"], correct: "ge", wordsOnly: true}
  ]
});
