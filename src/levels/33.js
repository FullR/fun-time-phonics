import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "33",
  consonant: "d",
  vowel: "i",
  lessonWords: ["dig", "ditch", "disco"],
  activities: [
    {words: ["dash", "dodge", "dish"], correctWord: "dish"},
    {words: ["dip", "drip", "deep"], correctWord: "dip", shortInstructions: true},
    {words: ["dancer", "dizzy", "daisy"], correctWord: "dizzy", shortInstructions: true},
    {words: ["disc", "desk", "dusk"], correctWord: "disc", shortInstructions: true},
    {words: ["dollar", "dinner", "dentist"], correctWord: "dinner", shortInstructions: true},
    {words: ["deli", "doll", "dimple"], correctWord: "dimple", shortInstructions: true},
    {words: ["desert", "disguise", "dungeon"], correctWord: "disguise", shortInstructions: true}
  ]
});
