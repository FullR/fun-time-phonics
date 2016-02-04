import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 35,
  letter: "d",
  vowel: "u",
  lessonWords: ["duck", "dunk", "dust"],
  activityData: [
    {words: ["disc", "desk", "dusk"], correct: "dusk"},
    {words: ["daisy", "dizzy", "dummy"], correct: "dummy", wordsOnly: true},
    {words: ["dump", "dome", "drum"], correct: "dump", wordsOnly: true},
    {words: ["dumpster", "dentist", "dimple"], correct: "dumpster", wordsOnly: true},
    {words: ["digit", "dodge", "dungeon"], correct: "dungeon", wordsOnly: true},
    {words: ["dumbbell", "doll", "deli"], correct: "dumbbell", wordsOnly: true},
    {words: ["daffodil", "duffel", "dollar"], correct: "duffel", wordsOnly: true}
  ]
});
