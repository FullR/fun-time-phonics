import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 65,
  letter: "l",
  vowel: "e",
  lessonWords: ["left", "lens", "lettuce"],
  activityData: [
    {words: ["log", "lung", "leg"], correct: "leg"},
    {words: ["lemon", "limo", "lime"], correct: "lemon", wordsOnly: true},
    {words: ["little", "letters", "ladder"], correct: "letters", wordsOnly: true},
    {words: ["lunch", "ledge", "lodge"], correct: "ledge", wordsOnly: true},
    {words: ["lettuce", "licorice", "luxury"], correct: "lettuce", wordsOnly: true},
    {words: ["lizard", "leopard", "lumber"], correct: "leopard", wordsOnly: true},
    {words: ["luggage", "locker", "leprechaun"], correct: "leprechaun", wordsOnly: true}
  ]
});
