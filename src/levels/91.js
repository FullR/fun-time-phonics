import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "91",
  consonant: "r",
  vowel: "e",
  lessonWords: ["Rex", "rebel", "register"],
  activities: [
    {words: ["rod", "road", "red"], correctWord: "red"},
    {words: ["wrist", "rest", "rose"], correctWord: "rest", wordsOnly: true},
    {words: ["bread", "ref", "raft"], correctWord: "ref", wordsOnly: true},
    {words: ["reptile", "ripple", "rattle"], correctWord: "reptile", wordsOnly: true},
    {words: ["rescue", "Rocco", "raccoon"], correctWord: "rescue", wordsOnly: true},
    {words: ["rocket", "racket", "rectangle"], correctWord: "rectangle", wordsOnly: true},
    {words: ["runway", "raspberry", "resevoir"], correctWord: "resevoir", wordsOnly: true}
  ]
});
