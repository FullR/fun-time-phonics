import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "107",
  consonant: "t",
  lessonLetters: ["ta", "te", "ti", "to", "tu"],
  lessonWords: ["tag", "ten", "Tim", "top", "tub"],
  activities: [
    {word: "tug", letters: ["tu", "to", "ti"], correctLetters: "tu"},
    {word: "tent", letters: ["ta", "te", "ti"], correctLetters: "te", shortInstructions: true},
    {word: "toxic", letters: ["ta", "te", "to"], correctLetters: "to", shortInstructions: true},
    {word: "taxi", letters: ["ta", "te", "to"], correctLetters: "ta", shortInstructions: true},
    {word: "ticket", letters: ["ta", "te", "ti"], correctLetters: "ti", shortInstructions: true},
    {word: "topping", letters: ["ti", "to", "tu"], correctLetters: "to", shortInstructions: true},
    {word: "tiptoe", letters: ["to", "ta", "ti"], correctLetters: "ti", shortInstructions: true},
    {word: "tunnel", letters: ["tu", "to", "ta"], correctLetters: "tu", shortInstructions: true},
    {word: "tattoo", letters: ["tu", "ti", "ta"], correctLetters: "ta", shortInstructions: true},
    {word: "tennis", letters: ["ti", "te", "ta"], correctLetters: "te", shortInstructions: true}
  ]
});
