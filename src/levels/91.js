import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "91",
  consonant: "r",
  vowel: "e",
  lessonWords: ["Rex", "rebel", "register"],
  activities: [
    {words: ["rod", "road", "red"], correctWord: "red"},
    {words: ["wrist", "rest", "rose"], correctWord: "rest", shortInstructions: true},
    {words: ["bread", "ref", "raft"], correctWord: "ref", shortInstructions: true},
    {words: ["reptile", "ripple", "rattle"], correctWord: "reptile", shortInstructions: true},
    {words: ["rescue", "Rocco", "raccoon"], correctWord: "rescue", shortInstructions: true},
    {words: ["rocket", "racket", "rectangle"], correctWord: "rectangle", shortInstructions: true},
    {words: ["runway", "raspberry", "reservoir"], correctWord: "reservoir", shortInstructions: true}
  ]
});
