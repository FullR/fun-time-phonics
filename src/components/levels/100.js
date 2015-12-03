import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 100,
  letter: "s",
  vowel: "u",
  lessonWords: ["sunk", "summer", "subway"],
  activityData: [
    {words: ["send", "sun", "sign"], correct: "sun"},
    {words: ["sand", "seeds", "suds"], correct: "suds", wordsOnly: true},
    {words: ["supper", "saddle", "sister"], correct: "supper", wordsOnly: true},
    {words: ["sucker", "soccer", "skunk"], correct: "sucker", wordsOnly: true},
    {words: ["sandal", "sundae", "silver"], correct: "sundae", wordsOnly: true},
    {words: ["salamander", "submarine", "stump"], correct: "submarine", wordsOnly: true},
    {words: ["semicircle", "sapphire", "sunflower"], correct: "sunflower", wordsOnly: true}
  ]
});
