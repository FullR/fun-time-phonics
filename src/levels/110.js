import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "110",
  consonant: "v",
  vowel: "e",
  lessonWords: ["vet", "vendor", "velvet"],
  activities: [
    {words: ["fence", "vent", "van"], correctWord: "vent"},
    {words: ["vase", "vise", "vest"], correctWord: "vest", wordsOnly: true},
    {words: ["venom", "vine", "victim"], correctWord: "venom", wordsOnly: true},
    {words: ["velcro", "valve", "volcano"], correctWord: "velcro", wordsOnly: true},
    {words: ["volleyball", "vigil", "vegetables"], correctWord: "vegetables", wordsOnly: true}
  ]
});
