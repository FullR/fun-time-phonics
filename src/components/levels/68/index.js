import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 68,
  letter: "l",
  vowel: "u",
  lessonWords: ["lung", "lump", "luggage"],
  activityData: [
    {words: ["log", "lug", "leg"], correct: "lug"},
    {words: ["lunch", "latch", "launch"], correct: "lunch", wordsOnly: true},
    {words: ["lamp", "lump", "leprechaun"], correct: "lump", wordsOnly: true},
    {words: ["lobster", "leopard", "lumber"], correct: "lumber", wordsOnly: true},
    {words: ["luggage", "lodge", "leash"], correct: "luggage", wordsOnly: true},
    {words: ["laptop", "lollipop", "lullaby"], correct: "lullaby", wordsOnly: true},
    {words: ["locker", "licorice", "luxury"], correct: "luxury", wordsOnly: true}
  ]
});
