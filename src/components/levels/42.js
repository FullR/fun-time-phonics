import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  number: 42,
  title: "Consonant \"f\" With Short Vowels Review",
  lessonLetters: ["fa", "fe", "fi", "fo", "fu"],
  lessonWords: ["fat", "fetch", "fix", "fox", "fudge"],
  activityData: [
    {word: "fist", letters: ["fe", "fu", "fi"], correct: "fi"},
    {word: "follow", letters: ["fi", "fo", "fu"], correct: "fo", wordsOnly: true},
    {word: "fun", letters: ["fu", "fo", "fe"], correct: "fu", wordsOnly: true},
    {word: "fence", letters: ["fe", "fo", "fa"], correct: "fe", wordsOnly: true},
    {word: "fifty", letters: ["fe", "fi", "fa"], correct: "fi", wordsOnly: true},
    {word: "fast", letters: ["fa", "fi", "fo"], correct: "fa", wordsOnly: true},
    {word: "fuzzy", letters: ["fa", "fi", "fu"], correct: "fu", wordsOnly: true},
    {word: "feather", letters: ["fa", "fe", "fi"], correct: "fe", wordsOnly: true},
    {word: "fossil", letters: ["fu", "fa", "fo"], correct: "fo", wordsOnly: true},
    {word: "fabric", letters: ["fu", "fa", "fo"], correct: "fa", wordsOnly: true}
  ]
});
