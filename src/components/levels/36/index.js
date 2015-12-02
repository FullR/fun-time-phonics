import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  number: 36,
  title: "Consonant 'd' With Short Vowels",
  activityCount: 10,
  lessonLetters: ["da", "de", "di", "do", "du"],
  lessonWords: ["dagger", "deck", "dig", "dock", "duck"],
  activityData: [
    {word: "desk", letters: ["do", "de", "di"], correct: "de"},
    {word: "disguise", letters: ["de", "du", "di"], correct: "di", wordsOnly: true},
    {word: "dad", letters: ["da", "de", "do"], correct: "da", wordsOnly: true},
    {word: "dust", letters: ["du", "di", "de"], correct: "du", wordsOnly: true},
    {word: "dollar", letters: ["da", "du", "do"], correct: "do", wordsOnly: true},
    {word: "dunk", letters: ["de", "du", "do"], correct: "du", wordsOnly: true},
    {word: "dash", letters: ["da", "de", "ba"], correct: "da", wordsOnly: true},
    {word: "doctor", letters: ["du", "do", "de"], correct: "do", wordsOnly: true},
    {word: "dinner", letters: ["bi", "di", "de"], correct: "di", wordsOnly: true},
    {word: "dent", letters: ["bi", "di", "de"], correct: "de", wordsOnly: true}
  ]
});
