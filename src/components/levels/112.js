import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 112,
  letter: "v",
  vowel: "o",
  lessonWords: ["volley", "vomit", "volume"],
  activityData: [
    {words: ["wok", "fox", "Vonda"], correct: "Vonda"},
    {words: ["venom", "volume", "villain"], correct: "volume", wordsOnly: true},
    {words: ["volleyball", "valuables", "vegetables"], correct: "volleyball", wordsOnly: true},
    {words: ["visitor", "vulture", "volunteer"], correct: "volunteer", wordsOnly: true}
  ]
});
