import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "34",
  consonant: "d",
  vowel: "o",
  lessonWords: ["dot", "dock", "doll"],
  activities: [
    {words: ["dagger", "dinner", "doctor"], correctWord: "doctor"},
    {words: ["dollar", "deli", "dummy"], correctWord: "dollar", wordsOnly: true},
    {words: ["dot", "dig", "drop"], correctWord: "dot", wordsOnly: true},
    {words: ["duck", "dock", "deck"], correctWord: "dock", wordsOnly: true},
    {words: ["dumbbell", "denim", "domino"], correctWord: "domino", wordsOnly: true},
    {words: ["digit", "dodge", "dungeon"], correctWord: "dodge", wordsOnly: true},
    {words: ["Debbie", "Diane", "Donna"], correctWord: "Donna", wordsOnly: true}
  ]
});
