import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  number: 30,
  lessonLetters: ["ca", "co", "cu"],
  lessonWords: ["cat", "cob", "cub"],
  letter: "c",
  activityData: [
    {word: "cap", letters: ["co", "ca", "cu"], correct: "ca"},
    {word: "cop", letters: ["co", "cu", "ca"], correct: "co", wordsOnly: true},
    {word: "cup", letters: ["cu", "co", "ca"], correct: "cu", wordsOnly: true},
    {word: "cot", letters: ["ca", "cu", "co"], correct: "co", wordsOnly: true},
    {word: "cash", letters: ["cu", "co", "ca"], correct: "ca", wordsOnly: true},
    {word: "customer", letters: ["cu", "co", "ca"], correct: "cu", wordsOnly: true}
  ]
});
