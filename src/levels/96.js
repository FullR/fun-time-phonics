import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["saddle", "seven", "sister", "socket", "sun"],
  id: "96",
  consonant: "s",
  vowel: "a",
  lessonWords: ["sag", "sash", "sapphire"],
  activities: [
    {words: ["sod", "seed", "sad"], correctWord: "sad"},
    {words: ["sack", "sick", "sink"], correctWord: "sack", shortInstructions: true},
    {words: ["soap", "sap", "soup"], correctWord: "sap", shortInstructions: true},
    {words: ["solids", "salad", "silo"], correctWord: "salad", shortInstructions: true},
    {words: ["separate", "satellite", "seventeen"], correctWord: "satellite", shortInstructions: true},
    {words: ["socks", "six", "saxophone"], correctWord: "saxophone", shortInstructions: true},
    {words: ["semicircle", "salamander", "submarine"], correctWord: "salamander", shortInstructions: true}
  ]
});
