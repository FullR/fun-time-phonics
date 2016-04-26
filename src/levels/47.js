import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "47",
  consonant: "g",
  lessonLetters: ["ga", "go", "gu"],
  lessonWords: ["gas", "god", "gush"],
  activities: [
    {word: "gum", letters: ["go", "gu", "ga"], correctLetters: "gu"},
    {word: "gag", letters: ["ga", "go", "gu"], correctLetters: "ga", wordsOnly: true},
    {word: "goggles", letters: ["ga", "gu", "go"], correctLetters: "go", wordsOnly: true},
    {word: "gutter", letters: ["gu", "go", "ga"], correctLetters: "gu", wordsOnly: true},
    {word: "gavel", letters: ["ga", "go", "gu"], correctLetters: "ga", wordsOnly: true},
    {word: "gobble", letters: ["gu", "ga", "go"], correctLetters: "go", wordsOnly: true}
  ]
});
