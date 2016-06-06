import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "37",
  
  consonant: "f",
  vowel: "a",
  letterIntroWords: ["fast", "fence", "fix", "fox", "fun"],
  lessonWords: ["fat", "fashion", "falcon"],
  activities: [
    {words: ["fist", "fast", "feast"], correctWord: "fast"},
    {words: ["feet", "fit", "fat"], correctWord: "fat", shortInstructions: true},
    {words: ["fix", "fax", "phone"], correctWord: "fax", shortInstructions: true},
    {words: ["flag", "fumble", "fabric"], correctWord: "fabric", shortInstructions: true},
    {words: ["fiddle", "family", "funnel"], correctWord: "family", shortInstructions: true},
    {words: ["fasten", "fossil", "festival"], correctWord: "fasten", shortInstructions: true},
    {words: ["factory", "fetch", "foxhole"], correctWord: "factory", shortInstructions: true}
  ]
});
