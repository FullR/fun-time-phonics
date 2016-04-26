import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "35",
  consonant: "d",
  vowel: "u",
  lessonWords: ["duck", "dunk", "dust"],
  activities: [
    {words: ["disc", "desk", "dusk"], correctWord: "dusk"},
    {words: ["daisy", "dizzy", "dummy"], correctWord: "dummy", wordsOnly: true},
    {words: ["dump", "dome", "drum"], correctWord: "dump", wordsOnly: true},
    {words: ["dumpster", "dentist", "dimple"], correctWord: "dumpster", wordsOnly: true},
    {words: ["digit", "dodge", "dungeon"], correctWord: "dungeon", wordsOnly: true},
    {words: ["dumbbell", "doll", "deli"], correctWord: "dumbbell", wordsOnly: true},
    {words: ["daffodil", "duffel", "dollar"], correctWord: "duffel", wordsOnly: true}
  ]
});
