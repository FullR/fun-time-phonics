import multiConsonantReview from "levels/multi-consonant-review-level";

export default multiConsonantReview({
  id: "43",
  letter: "f",
  activities: [
    {word: "devil", letters: ["fe", "de", "be"], correctLetters: "de"},
    {word: "bud", letters: ["cu", "be", "bu"], correctLetters: "bu", wordsOnly: true},
    {word: "cab", letters: ["ca", "ba", "fa"], correctLetters: "ca", wordsOnly: true},
    {word: "fox", letters: ["bo", "do", "fo"], correctLetters: "fo", wordsOnly: true},
    {word: "bath", letters: ["ba", "da", "fa"], correctLetters: "ba", wordsOnly: true},
    {word: "cuff", letters: ["du", "cu", "fu"], correctLetters: "cu", wordsOnly: true},
    {word: "dab", letters: ["ba", "da", "fa"], correctLetters: "da", wordsOnly: true},
    {word: "factory", letters: ["ca", "da", "fa"], correctLetters: "fa", wordsOnly: true},
    {word: "collar", letters: ["co", "cu", "fo"], correctLetters: "co", wordsOnly: true},
    {word: "dig", letters: ["bi", "cu", "di"], correctLetters: "di", wordsOnly: true},
    {word: "fumble", letters: ["fu", "cu", "bu"], correctLetters: "fu", wordsOnly: true},
    {word: "bottle", letters: ["do", "bo", "bu"], correctLetters: "bo", wordsOnly: true},
  ]
});
