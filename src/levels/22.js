import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "22",
  consonant: "b",
  vowel: "e",
  lessonWords: ["bed", "beg", "bench"],
  activities: [
    {words: ["boat", "bent", "bite"], correctWord: "bent"},
    {words: ["Bill", "ball", "bell"], correctWord: "bell", shortInstructions: true},
    {words: ["bend", "den", "band"], correctWord: "bend", shortInstructions: true},
    {words: ["bomb", "bath", "Beth"], correctWord: "Beth", shortInstructions: true},
    {words: ["belt", "buck", "back"], correctWord: "belt", shortInstructions: true},
    {words: ["baby", "butter", "bedroom"], correctWord: "bedroom", shortInstructions: true},
    {words: ["bush", "best", "bus"], correctWord: "best", shortInstructions: true}
  ]
});
