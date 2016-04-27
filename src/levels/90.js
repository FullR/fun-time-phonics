import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  letterIntroWords: ["rat", "register", "ribbon", "rocket", "rug"],
  id: "90",
  consonant: "r",
  vowel: "a",
  lessonWords: ["rag", "rat", "raccoon"],
  activities: [
    {words: ["rack", "wreck", "rock"], correctWord: "rack"},
    {words: ["rush", "rich", "rash"], correctWord: "rash", wordsOnly: true},
    {words: ["raft", "ref", "roof"], correctWord: "raft", wordsOnly: true},
    {words: ["ribbon", "robin", "rabbit"], correctWord: "rabbit", wordsOnly: true},
    {words: ["rattle", "ripple", "ruffle"], correctWord: "rattle", wordsOnly: true},
    {words: ["rocket", "racket", "rectangle"], correctWord: "racket", wordsOnly: true},
    {words: ["rudder", "radish", "register"], correctWord: "radish", wordsOnly: true}
  ]
});
