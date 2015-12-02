import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 39,
  letter: "f",
  vowel: "i",
  lessonWords: ["fist", "fifty", "fishing"],
  activityData: [
      {words: ["fin", "fan", "fun"], correct: "fin"},
      {words: ["feet", "fit", "flip"], correct: "fit", wordsOnly: true},
      {words: ["fax", "fix", "fox"], correct: "fix", wordsOnly: true},
      {words: ["fourth", "fifth", "foot"], correct: "fifth", wordsOnly: true},
      {words: ["full", "follow", "fill"], correct: "fill", wordsOnly: true},
      {words: ["fishing", "fossil", "fuzzy"], correct: "fishing", wordsOnly: true},
      {words: ["fiddle", "funnel", "festival"], correct: "fiddle", wordsOnly: true},
      {words: ["fist", "fast", "feast"], correct: "fist", wordsOnly: true},
      {words: ["fudge", "fetch", "fish"], correct: "fish", wordsOnly: true}
  ]
});
