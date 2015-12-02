import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 38,
  letter: "f",
  vowel: "e",
  lessonWords: ["fez", "fellow", "feather"],
  activityData: [
    {words: ["fix", "face", "fence"], correct: "fence"},
    {words: ["fudge", "fish", "fetch"], correct: "fetch", wordsOnly: true},
    {words: ["father", "feather", "farmer"], correct: "feather", wordsOnly: true},
    {words: ["fishing", "fencing", "factory"], correct: "fencing", wordsOnly: true},
    {words: ["fist", "fast", "festival"], correct: "festival", wordsOnly: true},
    {words: ["fall", "felon", "fill"], correct: "felon", wordsOnly: true},
    {words: ["fender", "finger", "fundraiser"], correct: "fender", wordsOnly: true}
  ]
});
