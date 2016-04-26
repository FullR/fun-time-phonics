import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "100",
  consonant: "s",
  vowel: "u",
  lessonWords: ["sunk", "summer", "subway"],
  activities: [
    {words: ["send", "sun", "sign"], correctWord: "sun"},
    {words: ["sand", "seeds", "suds"], correctWord: "suds", wordsOnly: true},
    {words: ["supper", "saddle", "sister"], correctWord: "supper", wordsOnly: true},
    {words: ["sucker", "soccer", "skunk"], correctWord: "sucker", wordsOnly: true},
    {words: ["sandal", "sundae", "silver"], correctWord: "sundae", wordsOnly: true},
    {words: ["salamander", "submarine", "stump"], correctWord: "submarine", wordsOnly: true},
    {words: ["semicircle", "sapphire", "sunflower"], correctWord: "sunflower", wordsOnly: true}
  ]
});
