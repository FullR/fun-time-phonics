import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  title: "Consonant \"l\" With Short Vowels",
  number: 69,
  lessonLetters: ["la", "le", "li", "lo", "lu"],
  lessonWords: ["lap", "left", "lift", "lock", "lump"],
  activityData: [
    {word: "lot", letters: ["lo", "le", "la"], correct: "lo"},
    {word: "lumber", letters: ["lo", "li", "lu"], correct: "lu", wordsOnly: true},
    {word: "ladder", letters: ["li", "le", "la"], correct: "la", wordsOnly: true},
    {word: "little", letters: ["li", "le", "lu"], correct: "li", wordsOnly: true},
    {word: "letter", letters: ["lu", "li", "le"], correct: "le", wordsOnly: true},
    {word: "lobster", letters: ["lu", "lo", "la"], correct: "lo", wordsOnly: true},
    {word: "lizard", letters: ["le", "li", "lu"], correct: "li", wordsOnly: true},
    {word: "lemon", letters: ["la", "le", "lo"], correct: "le", wordsOnly: true},
    {word: "lasso", letters: ["lo", "le", "la"], correct: "la", wordsOnly: true},
    {word: "luggage", letters: ["lu", "le", "lo"], correct: "lu", wordsOnly: true}
  ]
});
