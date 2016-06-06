import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "98",
  consonant: "s",
  vowel: "i",
  lessonWords: ["sick", "silk", "sizzle"],
  activities: [
    {words: ["sit", "set", "seat"], correctWord: "sit"},
    {words: ["sip", "sap", "soup"], correctWord: "sip", shortInstructions: true},
    {words: ["sticks", "six", "sax"], correctWord: "six", shortInstructions: true},
    {words: ["sickle", "second", "socket"], correctWord: "sickle", shortInstructions: true},
    {words: ["slipper", "saddle", "sister"], correctWord: "sister", shortInstructions: true},
    {words: ["sandal", "sundae", "sixteen"], correctWord: "sixteen", shortInstructions: true},
    {words: ["silver", "sapphire", "sunflower"], correctWord: "silver", shortInstructions: true}
  ]
});
