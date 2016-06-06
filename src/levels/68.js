import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "68",
  consonant: "l",
  vowel: "u",
  lessonWords: ["lung", "lump", "luggage"],
  activities: [
    {words: ["log", "lug", "leg"], correctWord: "lug"},
    {words: ["lunch", "latch", "launch"], correctWord: "lunch", shortInstructions: true},
    {words: ["lamp", "lump", "leprechaun"], correctWord: "lump", shortInstructions: true},
    {words: ["lobster", "leopard", "lumber"], correctWord: "lumber", shortInstructions: true},
    {words: ["luggage", "lodge", "leash"], correctWord: "luggage", shortInstructions: true},
    {words: ["laptop", "lollipop", "lullaby"], correctWord: "lullaby", shortInstructions: true},
    {words: ["locker", "licorice", "luxury"], correctWord: "luxury", shortInstructions: true}
  ]
});
