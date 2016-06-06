import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "65",
  consonant: "l",
  vowel: "e",
  lessonWords: ["left", "lens", "lettuce"],
  activities: [
    {words: ["log", "lung", "leg"], correctWord: "leg"},
    {words: ["lemon", "limo", "lime"], correctWord: "lemon", shortInstructions: true},
    {words: ["little", "letters", "ladder"], correctWord: "letters", shortInstructions: true},
    {words: ["lunch", "ledge", "lodge"], correctWord: "ledge", shortInstructions: true},
    {words: ["lettuce", "licorice", "luxury"], correctWord: "lettuce", shortInstructions: true},
    {words: ["lizard", "leopard", "lumber"], correctWord: "leopard", shortInstructions: true},
    {words: ["luggage", "locker", "leprechaun"], correctWord: "leprechaun", shortInstructions: true}
  ]
});
