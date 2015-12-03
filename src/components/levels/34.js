import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 34,
  letter: "d",
  vowel: "o",
  lessonWords: ["dot", "dock", "doll"],
  activityData: [
    {words: ["dagger", "dinner", "doctor"], correct: "doctor"},
    {words: ["dollar", "deli", "dummy"], correct: "dollar", wordsOnly: true},
    {words: ["dot", "dig", "drop"], correct: "dot", wordsOnly: true},
    {words: ["duck", "dock", "deck"], correct: "dock", wordsOnly: true},
    {words: ["dumbbell", "denim", "domino"], correct: "domino", wordsOnly: true},
    {words: ["digit", "dodge", "dungeon"], correct: "dodge", wordsOnly: true},
    {words: ["Debbie", "Diane", "Donna"], correct: "Donna", wordsOnly: true}
  ]
});
