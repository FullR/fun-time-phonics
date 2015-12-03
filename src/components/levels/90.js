import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  letterIntro: true,
  exampleWords: ["rat", "register", "ribbon", "rocket", "rug"],
  number: 90,
  letter: "r",
  vowel: "a",
  lessonWords: ["rag", "rat", "racoon"],
  activityData: [
    {words: ["rack", "wreck", "rock"], correct: "rack"},
    {words: ["rush", "rich", "rash"], correct: "rash", wordsOnly: true},
    {words: ["raft", "ref", "roof"], correct: "raft", wordsOnly: true},
    {words: ["ribbon", "robin", "rabbit"], correct: "rabbit", wordsOnly: true},
    {words: ["rattle", "ripple", "ruffle"], correct: "rattle", wordsOnly: true},
    {words: ["rocket", "racket", "rectangle"], correct: "racket", wordsOnly: true},
    {words: ["rudder", "radish", "register"], correct: "radish", wordsOnly: true}
  ]
});
