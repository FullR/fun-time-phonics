import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "47",
  consonant: "g",
  lessonLetters: ["ga", "go", "gu"],
  lessonWords: ["gas", "god", "gush"],
  activities: [
    {word: "gum", letters: ["go", "gu", "ga"], correctLetters: "gu"},
    {word: "gag", letters: ["ga", "go", "gu"], correctLetters: "ga", shortInstructions: true},
    {word: "goggles", letters: ["ga", "gu", "go"], correctLetters: "go", shortInstructions: true},
    {word: "gutter", letters: ["gu", "go", "ga"], correctLetters: "gu", shortInstructions: true},
    {word: "gavel", letters: ["ga", "go", "gu"], correctLetters: "ga", shortInstructions: true},
    {word: "gobble", letters: ["gu", "ga", "go"], correctLetters: "go", shortInstructions: true}
  ]
});
