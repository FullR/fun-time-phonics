import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "39",
  consonant: "f",
  vowel: "i",
  lessonWords: ["fist", "fifty", "fishing"],
  activities: [
      {words: ["fin", "fan", "fun"], correctWord: "fin"},
      {words: ["feet", "fit", "flip"], correctWord: "fit", shortInstructions: true},
      {words: ["fax", "fix", "fox"], correctWord: "fix", shortInstructions: true},
      {words: ["fourth", "fifth", "foot"], correctWord: "fifth", shortInstructions: true},
      {words: ["full", "follow", "fill"], correctWord: "fill", shortInstructions: true},
      {words: ["fishing", "fossil", "fuzzy"], correctWord: "fishing", shortInstructions: true},
      {words: ["fiddle", "funnel", "festival"], correctWord: "fiddle", shortInstructions: true},
      {words: ["fist", "fast", "feast"], correctWord: "fist", shortInstructions: true},
      {words: ["fudge", "fetch", "fish"], correctWord: "fish", shortInstructions: true}
  ]
});
