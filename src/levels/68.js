import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "68",
  consonant: "l",
  vowel: "u",
  lessonWords: ["lung", "lump", "luggage"],
  activities: [
    {words: ["log", "lug", "leg"], correctWord: "lug"},
    {words: ["lunch", "latch", "launch"], correctWord: "lunch", wordsOnly: true},
    {words: ["lamp", "lump", "leprechaun"], correctWord: "lump", wordsOnly: true},
    {words: ["lobster", "leopard", "lumber"], correctWord: "lumber", wordsOnly: true},
    {words: ["luggage", "lodge", "leash"], correctWord: "luggage", wordsOnly: true},
    {words: ["laptop", "lollipop", "lullaby"], correctWord: "lullaby", wordsOnly: true},
    {words: ["locker", "licorice", "luxury"], correctWord: "luxury", wordsOnly: true}
  ]
});
