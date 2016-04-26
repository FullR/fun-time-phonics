import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "111",
  consonant: "v",
  vowel: "i",
  lessonWords: ["village", "victory", "Vivian"],
  activities: [
    {words: ["velcro", "vanity", "video"], correctWord: "video"},
    {words: ["victim", "vacuum", "venom"], correctWord: "victim", wordsOnly: true},
    {words: ["vigil", "vulture", "vegetables"], correctWord: "vigil", wordsOnly: true},
    {words: ["volume", "villain", "valley"], correctWord: "villain", wordsOnly: true},
    {words: ["vampire", "visitor", "vest"], correctWord: "visitor", wordsOnly: true}
  ]
});
