import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "38",
  consonant: "f",
  vowel: "e",
  lessonWords: ["fez", "fellow", "feather"],
  activities: [
    {words: ["fix", "face", "fence"], correctWord: "fence"},
    {words: ["fudge", "fish", "fetch"], correctWord: "fetch", wordsOnly: true},
    {words: ["father", "feather", "farmer"], correctWord: "feather", wordsOnly: true},
    {words: ["fishing", "fencing", "factory"], correctWord: "fencing", wordsOnly: true},
    {words: ["fist", "fast", "festival"], correctWord: "festival", wordsOnly: true},
    {words: ["fall", "felon", "fill"], correctWord: "felon", wordsOnly: true},
    {words: ["fender", "finger", "fundraiser"], correctWord: "fender", wordsOnly: true}
  ]
});
