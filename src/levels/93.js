import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "93",
  consonant: "r",
  vowel: "o",
  lessonWords: ["rod", "Rocco", "rotten"],
  activities: [
    {words: ["rack", "wreck", "rock"], correctWord: "rock"},
    {words: ["rod", "red", "read"], correctWord: "rod", shortInstructions: true},
    {words: ["rib", "ref", "rob"], correctWord: "rob", shortInstructions: true},
    {words: ["ribbon", "robin", "rabbit"], correctWord: "robin", shortInstructions: true},
    {words: ["rocket", "racket", "rung"], correctWord: "rocket", shortInstructions: true},
    {words: ["robber", "river", "rudder"], correctWord: "robber", shortInstructions: true},
    {words: ["rescue", "rocking", "raccoon"], correctWord: "rocking", shortInstructions: true}
  ]
});
