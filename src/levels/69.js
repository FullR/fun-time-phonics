import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "69",
  consonant: "l",
  lessonLetters: ["la", "le", "li", "lo", "lu"],
  lessonWords: ["lap", "left", "lift", "lock", "lump"],
  activities: [
    {word: "lot", letters: ["lo", "le", "la"], correctLetters: "lo"},
    {word: "lumber", letters: ["lo", "li", "lu"], correctLetters: "lu", wordsOnly: true},
    {word: "ladder", letters: ["li", "le", "la"], correctLetters: "la", wordsOnly: true},
    {word: "little", letters: ["li", "le", "lu"], correctLetters: "li", wordsOnly: true},
    {word: "letter", letters: ["lu", "li", "le"], correctLetters: "le", wordsOnly: true},
    {word: "lobster", letters: ["lu", "lo", "la"], correctLetters: "lo", wordsOnly: true},
    {word: "lizard", letters: ["le", "li", "lu"], correctLetters: "li", wordsOnly: true},
    {word: "lemon", letters: ["la", "le", "lo"], correctLetters: "le", wordsOnly: true},
    {word: "lasso", letters: ["lo", "le", "la"], correctLetters: "la", wordsOnly: true},
    {word: "luggage", letters: ["lu", "le", "lo"], correctLetters: "lu", wordsOnly: true}
  ]
});
