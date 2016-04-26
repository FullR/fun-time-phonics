import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "41",
  consonant: "f",
  vowel: "u",
  lessonWords: ["fuss", "fudge", "funny"],
  activities: [
    {words: ["fin", "phone", "fun"], correctWord: "fun"},
    {words: ["fudge", "fetch", "face"], correctWord: "fudge", wordsOnly: true},
    {words: ["full", "fall", "fond"], correctWord: "full", wordsOnly: true},
    {words: ["fuzzy", "fossil", "fasten"], correctWord: "fuzzy", wordsOnly: true},
    {words: ["fiddle", "family", "funnel"], correctWord: "funnel", wordsOnly: true},
    {words: ["fall", "fumble", "festival"], correctWord: "fumble", wordsOnly: true},
    {words: ["fender", "finger", "fundraiser"], correctWord: "fundraiser", wordsOnly: true}
  ]
});
