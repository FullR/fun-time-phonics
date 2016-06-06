import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "112",
  consonant: "v",
  vowel: "o",
  lessonWords: ["volley", "vomit", "volume"],
  activities: [
    {words: ["wok", "fox", "Vonda"], correctWord: "Vonda"},
    {words: ["venom", "volume", "villain"], correctWord: "volume", shortInstructions: true},
    {words: ["volleyball", "valuables", "vegetables"], correctWord: "volleyball", shortInstructions: true},
    {words: ["visitor", "vulture", "volunteer"], correctWord: "volunteer", shortInstructions: true}
  ]
});
