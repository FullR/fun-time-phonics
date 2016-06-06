import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "36",
  consonant: "d",
  lessonLetters: ["da", "de", "di", "do", "du"],
  lessonWords: ["dagger", "deck", "dig", "dock", "duck"],
  activities: [
    {word: "desk", letters: ["do", "de", "di"], correctLetters: "de"},
    {word: "disguise", letters: ["de", "du", "di"], correctLetters: "di", shortInstructions: true},
    {word: "dad", letters: ["da", "de", "do"], correctLetters: "da", shortInstructions: true},
    {word: "dust", letters: ["du", "di", "de"], correctLetters: "du", shortInstructions: true},
    {word: "dollar", letters: ["da", "du", "do"], correctLetters: "do", shortInstructions: true},
    {word: "dunk", letters: ["de", "du", "do"], correctLetters: "du", shortInstructions: true},
    {word: "dash", letters: ["da", "de", "di"], correctLetters: "da", shortInstructions: true},
    {word: "doctor", letters: ["du", "do", "de"], correctLetters: "do", shortInstructions: true},
    {word: "dinner", letters: ["do", "di", "de"], correctLetters: "di", shortInstructions: true},
    {word: "dent", letters: ["du", "di", "de"], correctLetters: "de", shortInstructions: true}
  ]
});
