import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "22",
  consonant: "b",
  vowel: "e",
  lessonWords: ["bed", "beg", "bench"],
  activities: [
    {words: ["boat", "bent", "bite"], correctWord: "bent"},
    {words: ["Bill", "ball", "bell"], correctWord: "bell", wordsOnly: true},
    {words: ["bend", "den", "band"], correctWord: "bend", wordsOnly: true},
    {words: ["bomb", "bath", "Beth"], correctWord: "Beth", wordsOnly: true},
    {words: ["belt", "buck", "back"], correctWord: "belt", wordsOnly: true},
    {words: ["baby", "butter", "bedroom"], correctWord: "bedroom", wordsOnly: true},
    {words: ["bush", "best", "bus"], correctWord: "best", wordsOnly: true}
  ]
});
