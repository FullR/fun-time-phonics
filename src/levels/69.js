import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "69",
  consonant: "l",
  lessonLetters: ["la", "le", "li", "lo", "lu"],
  lessonWords: ["lap", "left", "lift", "lock", "lump"],
  activities: [
    {word: "lot", letters: ["lo", "le", "la"], correctLetters: "lo"},
    {word: "lumber", letters: ["lo", "li", "lu"], correctLetters: "lu", shortInstructions: true},
    {word: "ladder", letters: ["li", "le", "la"], correctLetters: "la", shortInstructions: true},
    {word: "little", letters: ["li", "le", "lu"], correctLetters: "li", shortInstructions: true},
    {word: "letter", letters: ["lu", "li", "le"], correctLetters: "le", shortInstructions: true},
    {word: "lobster", letters: ["lu", "lo", "la"], correctLetters: "lo", shortInstructions: true},
    {word: "lizard", letters: ["le", "li", "lu"], correctLetters: "li", shortInstructions: true},
    {word: "lemon", letters: ["la", "le", "lo"], correctLetters: "le", shortInstructions: true},
    {word: "lasso", letters: ["lo", "le", "la"], correctLetters: "la", shortInstructions: true},
    {word: "luggage", letters: ["lu", "le", "lo"], correctLetters: "lu", shortInstructions: true}
  ]
});
