import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 110,
  letter: "v",
  vowel: "e",
  lessonWords: ["vet", "vendor", "velvet"],
  activityData: [
    {words: ["fence", "vent", "van"], correct: "vent"},
    {words: ["vase", "vise", "vest"], correct: "vest", wordsOnly: true},
    {words: ["venom", "vine", "victim"], correct: "venom", wordsOnly: true},
    {words: ["velcro", "valve", "volcano"], correct: "velcro", wordsOnly: true},
    {words: ["volleyball", "vigil", "vegetables"], correct: "vegetables", wordsOnly: true}
  ]
});
