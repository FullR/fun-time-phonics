import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "95",
  consonant: "r",
  lessonLetters: ["ra", "re", "ri", "ro", "ru"],
  lessonWords: ["rat", "red", "rim", "rock", "rug"],
  activities: [
    {word: "rub", letters: ["ri", "ru", "ro"], correctLetters: "ru"},
    {word: "robber", letters: ["ra", "ru", "ro"], correctLetters: "ro", wordsOnly: true},
    {word: "rip", letters: ["pi", "ri", "re"], correctLetters: "ri", wordsOnly: true},
    {word: "ref", letters: ["re", "ri", "ru"], correctLetters: "re", wordsOnly: true},
    {word: "raft", letters: ["re", "ro", "ra"], correctLetters: "ra", wordsOnly: true},
    {word: "rush", letters: ["ru", "ro", "nu"], correctLetters: "ru", wordsOnly: true},
    {word: "rich", letters: ["ra", "re", "ri"], correctLetters: "ri", wordsOnly: true},
    {word: "racket", letters: ["ro", "ra", "ru"], correctLetters: "ra", wordsOnly: true},
    {word: "rectangle", letters: ["re", "ro", "ra"], correctLetters: "re", wordsOnly: true},
    {word: "rod", letters: ["re", "ro", "ru"], correctLetters: "ro", wordsOnly: true}
  ]
});
