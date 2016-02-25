import multiConsonantReview from "components/levels/multi-consonant-review";

export default multiConsonantReview({
  title: "Review: Consonant \"b\" - \"f\" With Short Vowels",
  number: 43,
  activityData: [
    {word: "devil", letters: ["fe", "de", "be"], correct: "de"},
    {word: "bud", letters: ["du", "be", "bu"], correct: "bu", wordsOnly: true},
    {word: "cab", letters: ["ca", "ba", "fa"], correct: "ca", wordsOnly: true},
    {word: "fox", letters: ["bo", "do", "fo"], correct: "fo", wordsOnly: true},
    {word: "bath", letters: ["ba", "da", "fa"], correct: "ba", wordsOnly: true},
    {word: "cuff", letters: ["du", "cu", "fu"], correct: "cu", wordsOnly: true},
    {word: "dab", letters: ["ba", "da", "fa"], correct: "da", wordsOnly: true},
    {word: "factory", letters: ["ca", "da", "fa"], correct: "fa", wordsOnly: true},
    {word: "collar", letters: ["co", "cu", "fo"], correct: "co", wordsOnly: true},
    {word: "dig", letters: ["bi", "cu", "di"], correct: "di", wordsOnly: true},
    {word: "fumble", letters: ["fu", "cu", "bu"], correct: "fu", wordsOnly: true},
    {word: "bottle", letters: ["do", "bo", "bu"], correct: "bo", wordsOnly: true},
  ]
});
