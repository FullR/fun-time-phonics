import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "42",
  consonant: "f",
  lessonLetters: ["fa", "fe", "fi", "fo", "fu"],
  lessonWords: ["fat", "fetch", "fix", "fox", "fudge"],
  activities: [
    {word: "fist", letters: ["fe", "fu", "fi"], correctLetters: "fi"},
    {word: "follow", letters: ["fi", "fo", "fu"], correctLetters: "fo", wordsOnly: true},
    {word: "fun", letters: ["fu", "fo", "fe"], correctLetters: "fu", wordsOnly: true},
    {word: "fence", letters: ["fe", "fo", "fa"], correctLetters: "fe", wordsOnly: true},
    {word: "fifty", letters: ["fe", "fi", "fa"], correctLetters: "fi", wordsOnly: true},
    {word: "fast", letters: ["fa", "fi", "fo"], correctLetters: "fa", wordsOnly: true},
    {word: "fuzzy", letters: ["fa", "fi", "fu"], correctLetters: "fu", wordsOnly: true},
    {word: "feather", letters: ["fa", "fe", "fi"], correctLetters: "fe", wordsOnly: true},
    {word: "fossil", letters: ["fu", "fa", "fo"], correctLetters: "fo", wordsOnly: true},
    {word: "fabric", letters: ["fu", "fa", "fo"], correctLetters: "fa", wordsOnly: true}
  ]
});
