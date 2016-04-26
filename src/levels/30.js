import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "30",
  consonant: "c",
  lessonLetters: ["ca", "co", "cu"],
  lessonWords: ["cat", "cob", "cub"],
  activities: [
    {word: "cap", letters: ["co", "ca", "cu"], correctLetters: "ca"},
    {word: "cop", letters: ["co", "cu", "ca"], correctLetters: "co", wordsOnly: true},
    {word: "cup", letters: ["cu", "co", "ca"], correctLetters: "cu", wordsOnly: true},
    {word: "cot", letters: ["ca", "cu", "co"], correctLetters: "co", wordsOnly: true},
    {word: "cash", letters: ["cu", "co", "ca"], correctLetters: "ca", wordsOnly: true},
    {word: "customer", letters: ["cu", "co", "ca"], correctLetters: "cu", wordsOnly: true}
  ]
});
