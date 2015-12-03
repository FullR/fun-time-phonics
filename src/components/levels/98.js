import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 98,
  letter: "s",
  vowel: "i",
  lessonWords: ["sick", "silk", "sizzle"],
  activityData: [
    {words: ["sit", "set", "seat"], correct: "sit"},
    {words: ["sip", "sap", "soup"], correct: "sip", wordsOnly: true},
    {words: ["sticks", "six", "sax"], correct: "six", wordsOnly: true},
    {words: ["sickle", "second", "socket"], correct: "sickle", wordsOnly: true},
    {words: ["slipper", "saddle", "sister"], correct: "slipper", wordsOnly: true},
    {words: ["sandal", "sundae", "sixteen"], correct: "sixteen", wordsOnly: true},
    {words: ["silver", "sapphire", "sunflower"], correct: "silver", wordsOnly: true}
  ]
});
