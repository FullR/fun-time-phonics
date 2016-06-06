import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "111",
  consonant: "v",
  vowel: "i",
  lessonWords: ["village", "victory", "Vivian"],
  activities: [
    {words: ["velcro", "vanity", "video"], correctWord: "video"},
    {words: ["victim", "vacuum", "venom"], correctWord: "victim", shortInstructions: true},
    {words: ["vigil", "vulture", "vegetables"], correctWord: "vigil", shortInstructions: true},
    {words: ["volume", "villain", "valley"], correctWord: "villain", shortInstructions: true},
    {words: ["vampire", "visitor", "vest"], correctWord: "visitor", shortInstructions: true}
  ]
});
