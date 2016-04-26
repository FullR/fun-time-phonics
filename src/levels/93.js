import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "93",
  consonant: "r",
  vowel: "o",
  lessonWords: ["rod", "Rocco", "rotten"],
  activities: [
    {words: ["rack", "wreck", "rock"], correctWord: "rock"},
    {words: ["rod", "red", "read"], correctWord: "rod", wordsOnly: true},
    {words: ["rib", "ref", "rob"], correctWord: "rob", wordsOnly: true},
    {words: ["ribbon", "robin", "rabbit"], correctWord: "robin", wordsOnly: true},
    {words: ["rocket", "racket", "rung"], correctWord: "rocket", wordsOnly: true},
    {words: ["robber", "river", "rudder"], correctWord: "robber", wordsOnly: true},
    {words: ["rescue", "rocking", "raccoon"], correctWord: "rocking", wordsOnly: true}
  ]
});
