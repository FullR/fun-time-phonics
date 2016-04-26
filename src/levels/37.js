import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "37",
  
  consonant: "f",
  vowel: "a",
  letterIntroWords: ["fast", "fence", "fix", "fox", "fun"],
  lessonWords: ["fat", "fashion", "falcon"],
  activities: [
    {words: ["fist", "fast", "feast"], correctWord: "fast"},
    {words: ["feet", "fit", "fat"], correctWord: "fat", wordsOnly: true},
    {words: ["fix", "fax", "phone"], correctWord: "fax", wordsOnly: true},
    {words: ["flag", "fumble", "fabric"], correctWord: "fabric", wordsOnly: true},
    {words: ["fiddle", "family", "funnel"], correctWord: "family", wordsOnly: true},
    {words: ["fasten", "fossil", "festival"], correctWord: "fasten", wordsOnly: true},
    {words: ["factory", "fetch", "foxhole"], correctWord: "factory", wordsOnly: true}
  ]
});
