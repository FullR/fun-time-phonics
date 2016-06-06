import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "100",
  consonant: "s",
  vowel: "u",
  lessonWords: ["sunk", "summer", "subway"],
  activities: [
    {words: ["send", "sun", "sign"], correctWord: "sun"},
    {words: ["sand", "seeds", "suds"], correctWord: "suds", shortInstructions: true},
    {words: ["supper", "saddle", "sister"], correctWord: "supper", shortInstructions: true},
    {words: ["sucker", "soccer", "skunk"], correctWord: "sucker", shortInstructions: true},
    {words: ["sandal", "sundae", "silver"], correctWord: "sundae", shortInstructions: true},
    {words: ["salamander", "submarine", "stump"], correctWord: "submarine", shortInstructions: true},
    {words: ["semicircle", "sapphire", "sunflower"], correctWord: "sunflower", shortInstructions: true}
  ]
});
