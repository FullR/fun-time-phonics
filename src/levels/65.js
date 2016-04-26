import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "65",
  consonant: "l",
  vowel: "e",
  lessonWords: ["left", "lens", "lettuce"],
  activities: [
    {words: ["log", "lung", "leg"], correctWord: "leg"},
    {words: ["lemon", "limo", "lime"], correctWord: "lemon", wordsOnly: true},
    {words: ["little", "letters", "ladder"], correctWord: "letters", wordsOnly: true},
    {words: ["lunch", "ledge", "lodge"], correctWord: "ledge", wordsOnly: true},
    {words: ["lettuce", "licorice", "luxury"], correctWord: "lettuce", wordsOnly: true},
    {words: ["lizard", "leopard", "lumber"], correctWord: "leopard", wordsOnly: true},
    {words: ["luggage", "locker", "leprechaun"], correctWord: "leprechaun", wordsOnly: true}
  ]
});
