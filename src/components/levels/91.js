import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 91,
  letter: "r",
  vowel: "e",
  lessonWords: ["Rex", "rebel", "register"],
  activityData: [
    {words: ["rod", "road", "red"], correct: "red"},
    {words: ["wrist", "rest", "rose"], correct: "rest", wordsOnly: true},
    {words: ["bread", "ref", "raft"], correct: "ref", wordsOnly: true},
    {words: ["reptile", "ripple", "rattle"], correct: "reptile", wordsOnly: true},
    {words: ["rescue", "Rocco", "raccoon"], correct: "rescue", wordsOnly: true},
    {words: ["rocket", "racket", "rectangle"], correct: "rectangle", wordsOnly: true},
    {words: ["runway", "raspberry", "resevoir"], correct: "resevoir", wordsOnly: true}
  ]
});
