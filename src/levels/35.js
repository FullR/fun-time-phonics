import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "35",
  consonant: "d",
  vowel: "u",
  lessonWords: ["duck", "dunk", "dust"],
  activities: [
    {words: ["disc", "desk", "dusk"], correctWord: "dusk"},
    {words: ["daisy", "dizzy", "dummy"], correctWord: "dummy", shortInstructions: true},
    {words: ["dump", "dome", "drum"], correctWord: "dump", shortInstructions: true},
    {words: ["dumpster", "dentist", "dimple"], correctWord: "dumpster", shortInstructions: true},
    {words: ["digit", "dodge", "dungeon"], correctWord: "dungeon", shortInstructions: true},
    {words: ["dumbbell", "doll", "deli"], correctWord: "dumbbell", shortInstructions: true},
    {words: ["daffodil", "duffel", "dollar"], correctWord: "duffel", shortInstructions: true}
  ]
});
