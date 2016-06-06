import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "34",
  consonant: "d",
  vowel: "o",
  lessonWords: ["dot", "dock", "doll"],
  activities: [
    {words: ["dagger", "dinner", "doctor"], correctWord: "doctor"},
    {words: ["dollar", "deli", "dummy"], correctWord: "dollar", shortInstructions: true},
    {words: ["dot", "dig", "drop"], correctWord: "dot", shortInstructions: true},
    {words: ["duck", "dock", "deck"], correctWord: "dock", shortInstructions: true},
    {words: ["dumbbell", "denim", "domino"], correctWord: "domino", shortInstructions: true},
    {words: ["digit", "dodge", "dungeon"], correctWord: "dodge", shortInstructions: true},
    {words: ["Debbie", "Diane", "Donna"], correctWord: "Donna", shortInstructions: true}
  ]
});
