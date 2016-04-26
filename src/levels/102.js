import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["tattoo", "tent", "ticket", "top", "tugboat"],
  id: "102",
  consonant: "t",
  vowel: "a",
  lessonWords: ["talon", "tablet", "tattoo"],
  activities: [
    {words: ["tip", "top", "tap"], correctWord: "tap"},
    {words: ["tug", "tag", "tiger"], correctWord: "tag", wordsOnly: true},
    {words: ["tack", "tusk", "stack"], correctWord: "tack", wordsOnly: true},
    {words: ["toxic", "taxi", "tuxedo"], correctWord: "taxi", wordsOnly: true},
    {words: ["tickle", "tackle", "toddler"], correctWord: "tackle", wordsOnly: true},
    {words: ["tadpole", "tiptoe", "toadstool"], correctWord: "tadpole", wordsOnly: true},
    {words: ["tightrope", "telescope", "tapestry"], correctWord: "tapestry", wordsOnly: true}
  ]
});
