import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "39",
  consonant: "f",
  vowel: "i",
  lessonWords: ["fist", "fifty", "fishing"],
  activities: [
      {words: ["fin", "fan", "fun"], correctWord: "fin"},
      {words: ["feet", "fit", "flip"], correctWord: "fit", wordsOnly: true},
      {words: ["fax", "fix", "fox"], correctWord: "fix", wordsOnly: true},
      {words: ["fourth", "fifth", "foot"], correctWord: "fifth", wordsOnly: true},
      {words: ["full", "follow", "fill"], correctWord: "fill", wordsOnly: true},
      {words: ["fishing", "fossil", "fuzzy"], correctWord: "fishing", wordsOnly: true},
      {words: ["fiddle", "funnel", "festival"], correctWord: "fiddle", wordsOnly: true},
      {words: ["fist", "fast", "feast"], correctWord: "fist", wordsOnly: true},
      {words: ["fudge", "fetch", "fish"], correctWord: "fish", wordsOnly: true}
  ]
});
