import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 37,
  letterIntro: true,
  letter: "f",
  vowel: "a",
  exampleWords: ["fast", "fence", "fix", "fox", "fun"],
  lessonWords: ["fat", "fashion", "falcon"],
  activityData: [
    {words: ["fist", "fast", "feast"], correct: "fast"},
    {words: ["feet", "fit", "fat"], correct: "fat", wordsOnly: true},
    {words: ["fix", "fax", "phone"], correct: "fax", wordsOnly: true},
    {words: ["flag", "fumble", "fabric"], correct: "fabric", wordsOnly: true},
    {words: ["fiddle", "family", "funnel"], correct: "family", wordsOnly: true},
    {words: ["fasten", "fossil", "festival"], correct: "fasten", wordsOnly: true},
    {words: ["factory", "fetch", "foxhole"], correct: "factory", wordsOnly: true}
  ]
});
