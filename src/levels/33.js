import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "33",
  consonant: "d",
  vowel: "i",
  lessonWords: ["dig", "ditch", "disco"],
  activities: [
    {words: ["dash", "dodge", "dish"], correctWord: "dish"},
    {words: ["dip", "drip", "deep"], correctWord: "dip", wordsOnly: true},
    {words: ["dancer", "dizzy", "daisy"], correctWord: "dizzy", wordsOnly: true},
    {words: ["disc", "desk", "dusk"], correctWord: "disc", wordsOnly: true},
    {words: ["dollar", "dinner", "dentist"], correctWord: "dinner", wordsOnly: true},
    {words: ["deli", "doll", "dimple"], correctWord: "dimple", wordsOnly: true},
    {words: ["desert", "disguise", "dungeon"], correctWord: "disguise", wordsOnly: true}
  ]
});
