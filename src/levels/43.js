import multiConsonantReview from "levels/multi-consonant-review-level";

export default multiConsonantReview({
  id: "43",
  letter: "f",
  activities: [
    {word: "devil", letters: ["fe", "de", "be"], correctWord: "de"},
    {word: "bud", letters: ["cu", "be", "bu"], correctWord: "bu", wordsOnly: true},
    {word: "cab", letters: ["ca", "ba", "fa"], correctWord: "ca", wordsOnly: true},
    {word: "fox", letters: ["bo", "do", "fo"], correctWord: "fo", wordsOnly: true},
    {word: "bath", letters: ["ba", "da", "fa"], correctWord: "ba", wordsOnly: true},
    {word: "cuff", letters: ["du", "cu", "fu"], correctWord: "cu", wordsOnly: true},
    {word: "dab", letters: ["ba", "da", "fa"], correctWord: "da", wordsOnly: true},
    {word: "factory", letters: ["ca", "da", "fa"], correctWord: "fa", wordsOnly: true},
    {word: "collar", letters: ["co", "cu", "fo"], correctWord: "co", wordsOnly: true},
    {word: "dig", letters: ["bi", "cu", "di"], correctWord: "di", wordsOnly: true},
    {word: "fumble", letters: ["fu", "cu", "bu"], correctWord: "fu", wordsOnly: true},
    {word: "bottle", letters: ["do", "bo", "bu"], correctWord: "bo", wordsOnly: true},
  ]
});
