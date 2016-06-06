import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "42",
  consonant: "f",
  lessonLetters: ["fa", "fe", "fi", "fo", "fu"],
  lessonWords: ["fat", "fetch", "fix", "fox", "fudge"],
  activities: [
    {word: "fist", letters: ["fe", "fu", "fi"], correctLetters: "fi"},
    {word: "follow", letters: ["fi", "fo", "fu"], correctLetters: "fo", shortInstructions: true},
    {word: "fun", letters: ["fu", "fo", "fe"], correctLetters: "fu", shortInstructions: true},
    {word: "fence", letters: ["fe", "fo", "fa"], correctLetters: "fe", shortInstructions: true},
    {word: "fifty", letters: ["fe", "fi", "fa"], correctLetters: "fi", shortInstructions: true},
    {word: "fast", letters: ["fa", "fi", "fo"], correctLetters: "fa", shortInstructions: true},
    {word: "fuzzy", letters: ["fa", "fi", "fu"], correctLetters: "fu", shortInstructions: true},
    {word: "feather", letters: ["fa", "fe", "fi"], correctLetters: "fe", shortInstructions: true},
    {word: "fossil", letters: ["fu", "fa", "fo"], correctLetters: "fo", shortInstructions: true},
    {word: "fabric", letters: ["fu", "fa", "fo"], correctLetters: "fa", shortInstructions: true}
  ]
});
