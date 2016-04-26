import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "36",
  consonant: "d",
  lessonLetters: ["da", "de", "di", "do", "du"],
  lessonWords: ["dagger", "deck", "dig", "dock", "duck"],
  activities: [
    {word: "desk", letters: ["do", "de", "di"], correctLetters: "de"},
    {word: "disguise", letters: ["de", "du", "di"], correctLetters: "di", wordsOnly: true},
    {word: "dad", letters: ["da", "de", "do"], correctLetters: "da", wordsOnly: true},
    {word: "dust", letters: ["du", "di", "de"], correctLetters: "du", wordsOnly: true},
    {word: "dollar", letters: ["da", "du", "do"], correctLetters: "do", wordsOnly: true},
    {word: "dunk", letters: ["de", "du", "do"], correctLetters: "du", wordsOnly: true},
    {word: "dash", letters: ["da", "de", "di"], correctLetters: "da", wordsOnly: true},
    {word: "doctor", letters: ["du", "do", "de"], correctLetters: "do", wordsOnly: true},
    {word: "dinner", letters: ["do", "di", "de"], correctLetters: "di", wordsOnly: true},
    {word: "dent", letters: ["du", "di", "de"], correctLetters: "de", wordsOnly: true}
  ]
});
