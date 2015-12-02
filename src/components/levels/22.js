import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 22,
  letter: "b",
  vowel: "e",
  lessonWords: ["bed", "beg", "bench"],
  activityData: [
    {words: ["boat", "bent", "bite"], correct: "bent"},
    {words: ["Bill", "ball", "bell"], correct: "bell", wordsOnly: true},
    {words: ["bend", "den", "band"], correct: "bend", wordsOnly: true},
    {words: ["bomb", "bath", "Beth"], correct: "Beth", wordsOnly: true},
    {words: ["belt", "buck", "back"], correct: "belt", wordsOnly: true},
    {words: ["baby", "butter", "bedroom"], correct: "bedroom", wordsOnly: true},
    {words: ["bush", "best", "bus"], correct: "best", wordsOnly: true}
  ]
});
