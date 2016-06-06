import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  letterIntroWords: ["rat", "register", "ribbon", "rocket", "rug"],
  id: "90",
  consonant: "r",
  vowel: "a",
  lessonWords: ["rag", "rat", "raccoon"],
  activities: [
    {words: ["rack", "wreck", "rock"], correctWord: "rack"},
    {words: ["rush", "rich", "rash"], correctWord: "rash", shortInstructions: true},
    {words: ["raft", "ref", "roof"], correctWord: "raft", shortInstructions: true},
    {words: ["ribbon", "robin", "rabbit"], correctWord: "rabbit", shortInstructions: true},
    {words: ["rattle", "ripple", "ruffle"], correctWord: "rattle", shortInstructions: true},
    {words: ["rocket", "racket", "rectangle"], correctWord: "racket", shortInstructions: true},
    {words: ["rudder", "radish", "register"], correctWord: "radish", shortInstructions: true}
  ]
});
