import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "41",
  consonant: "f",
  vowel: "u",
  lessonWords: ["fuss", "fudge", "funny"],
  activities: [
    {words: ["fin", "phone", "fun"], correctWord: "fun"},
    {words: ["fudge", "fetch", "face"], correctWord: "fudge", shortInstructions: true},
    {words: ["funny", "fall", "fond"], correctWord: "funny", shortInstructions: true},
    {words: ["fuzzy", "fossil", "fasten"], correctWord: "fuzzy", shortInstructions: true},
    {words: ["fiddle", "family", "funnel"], correctWord: "funnel", shortInstructions: true},
    {words: ["fall", "fumble", "festival"], correctWord: "fumble", shortInstructions: true},
    {words: ["fender", "finger", "fundraiser"], correctWord: "fundraiser", shortInstructions: true}
  ]
});
