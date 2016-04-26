import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["saddle", "seven", "sister", "socket", "sun"],
  id: "96",
  consonant: "s",
  vowel: "a",
  lessonWords: ["sag", "sash", "sapphire"],
  activities: [
    {words: ["sod", "seed", "sad"], correctWord: "sad"},
    {words: ["sack", "sick", "sink"], correctWord: "sack", wordsOnly: true},
    {words: ["soap", "sap", "soup"], correctWord: "sap", wordsOnly: true},
    {words: ["solids", "salad", "silo"], correctWord: "salad", wordsOnly: true},
    {words: ["separate", "satellite", "seventeen"], correctWord: "satellite", wordsOnly: true},
    {words: ["socks", "six", "saxophone"], correctWord: "saxophone", wordsOnly: true},
    {words: ["semicircle", "salamander", "submarine"], correctWord: "salamander", wordsOnly: true}
  ]
});
