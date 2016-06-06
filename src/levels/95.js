import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "95",
  consonant: "r",
  lessonLetters: ["ra", "re", "ri", "ro", "ru"],
  lessonWords: ["rat", "red", "rim", "rock", "rug"],
  activities: [
    {word: "rub", letters: ["ri", "ru", "ro"], correctLetters: "ru"},
    {word: "robber", letters: ["ra", "ru", "ro"], correctLetters: "ro", shortInstructions: true},
    {word: "rip", letters: ["ru", "ri", "re"], correctLetters: "ri", shortInstructions: true},
    {word: "ref", letters: ["re", "ri", "ru"], correctLetters: "re", shortInstructions: true},
    {word: "raft", letters: ["re", "ro", "ra"], correctLetters: "ra", shortInstructions: true},
    {word: "rush", letters: ["ru", "ro", "ra"], correctLetters: "ru", shortInstructions: true},
    {word: "rich", letters: ["ra", "re", "ri"], correctLetters: "ri", shortInstructions: true},
    {word: "racket", letters: ["ro", "ra", "ru"], correctLetters: "ra", shortInstructions: true},
    {word: "rectangle", letters: ["re", "ro", "ra"], correctLetters: "re", shortInstructions: true},
    {word: "rod", letters: ["re", "ro", "ru"], correctLetters: "ro", shortInstructions: true}
  ]
});
