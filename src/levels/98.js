import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "98",
  consonant: "s",
  vowel: "i",
  lessonWords: ["sick", "silk", "sizzle"],
  activities: [
    {words: ["sit", "set", "seat"], correctWord: "sit"},
    {words: ["sip", "sap", "soup"], correctWord: "sip", wordsOnly: true},
    {words: ["sticks", "six", "sax"], correctWord: "six", wordsOnly: true},
    {words: ["sickle", "second", "socket"], correctWord: "sickle", wordsOnly: true},
    {words: ["slipper", "saddle", "sister"], correctWord: "sister", wordsOnly: true},
    {words: ["sandal", "sundae", "sixteen"], correctWord: "sixteen", wordsOnly: true},
    {words: ["silver", "sapphire", "sunflower"], correctWord: "silver", wordsOnly: true}
  ]
});
