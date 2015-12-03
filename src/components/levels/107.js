import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  letter: "t",
  number: 107,
  lessonLetters: ["ta", "te", "ti", "to", "tu"],
  lessonWords: ["tag", "ten", "Tim", "top", "tub"],
  activityData: [
    {word: "tug", letters: ["tu", "to", "ti"], correct: "tu"},
    {word: "tent", letters: ["ta", "te", "ti"], correct: "te", wordsOnly: true},
    {word: "toxic", letters: ["ta", "te", "to"], correct: "to", wordsOnly: true},
    {word: "taxi", letters: ["ta", "te", "to"], correct: "ta", wordsOnly: true},
    {word: "ticket", letters: ["ta", "te", "ti"], correct: "ti", wordsOnly: true},
    {word: "topping", letters: ["ti", "to", "tu"], correct: "to", wordsOnly: true},
    {word: "tiptoe", letters: ["to", "ta", "ti"], correct: "ti", wordsOnly: true},
    {word: "tunnel", letters: ["tu", "to", "ta"], correct: "tu", wordsOnly: true},
    {word: "tattoo", letters: ["tu", "ti", "ta"], correct: "ta", wordsOnly: true},
    {word: "tennis", letters: ["ti", "te", "ta"], correct: "te", wordsOnly: true}
  ]
});
