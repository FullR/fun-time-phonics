import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["tattoo", "tent", "ticket", "top", "tugboat"],
  id: "102",
  consonant: "t",
  vowel: "a",
  lessonWords: ["talon", "tablet", "tattoo"],
  activities: [
    {words: ["tip", "top", "tap"], correctWord: "tap"},
    {words: ["tug", "tag", "tiger"], correctWord: "tag", shortInstructions: true},
    {words: ["tack", "tusk", "stack"], correctWord: "tack", shortInstructions: true},
    {words: ["toxic", "taxi", "tuxedo"], correctWord: "taxi", shortInstructions: true},
    {words: ["tickle", "tackle", "toddler"], correctWord: "tackle", shortInstructions: true},
    {words: ["tadpole", "tiptoe", "toadstool"], correctWord: "tadpole", shortInstructions: true},
    {words: ["tightrope", "telescope", "tapestry"], correctWord: "tapestry", shortInstructions: true}
  ]
});
