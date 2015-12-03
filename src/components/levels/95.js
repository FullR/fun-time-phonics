import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  letter: "r",
  number: 95,
  lessonLetters: ["ra", "re", "ri", "ro", "ru"],
  lessonWords: ["rat", "red", "rim", "rock", "rug"],
  activityData: [
    {word: "rub", letters: ["ri", "ru", "ro"], correct: "ru"},
    {word: "robber", letters: ["ra", "ru", "ro"], correct: "ro", wordsOnly: true},
    {word: "rip", letters: ["pi", "ri", "re"], correct: "ri", wordsOnly: true},
    {word: "ref", letters: ["re", "ri", "ru"], correct: "re", wordsOnly: true},
    {word: "raft", letters: ["re", "ro", "ra"], correct: "ra", wordsOnly: true},
    {word: "rush", letters: ["ru", "ro", "nu"], correct: "ru", wordsOnly: true},
    {word: "rich", letters: ["ra", "re", "ri"], correct: "ri", wordsOnly: true},
    {word: "racket", letters: ["ro", "ra", "ru"], correct: "ra", wordsOnly: true},
    {word: "rectangle", letters: ["re", "ro", "ra"], correct: "re", wordsOnly: true},
    {word: "rod", letters: ["re", "ro", "ru"], correct: "ro", wordsOnly: true}
  ]
});
