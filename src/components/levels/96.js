import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  letterIntro: true,
  exampleWords: ["saddle", "seven", "sister", "socket", "sun"],
  number: 96,
  letter: "s",
  vowel: "a",
  lessonWords: ["sag", "sash", "sapphire"],
  activityData: [
    {words: ["sod", "seed", "sad"], correct: "sad"},
    {words: ["sack", "sick", "sink"], correct: "sack", wordsOnly: true},
    {words: ["soap", "sap", "soup"], correct: "sap", wordsOnly: true},
    {words: ["solids", "salad", "silo"], correct: "salad", wordsOnly: true},
    {words: ["separate", "satellite", "seventeen"], correct: "satellite", wordsOnly: true},
    {words: ["socks", "six", "saxophone"], correct: "saxophone", wordsOnly: true},
    {words: ["semicircle", "salamander", "submarine"], correct: "salamander", wordsOnly: true}
  ]
});
