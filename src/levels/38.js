import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "38",
  consonant: "f",
  vowel: "e",
  lessonWords: ["fez", "fellow", "feather"],
  activities: [
    {words: ["fix", "face", "fence"], correctWord: "fence"},
    {words: ["fudge", "fish", "fetch"], correctWord: "fetch", shortInstructions: true},
    {words: ["father", "feather", "farmer"], correctWord: "feather", shortInstructions: true},
    {words: ["fishing", "fencing", "factory"], correctWord: "fencing", shortInstructions: true},
    {words: ["fist", "fast", "festival"], correctWord: "festival", shortInstructions: true},
    {words: ["fall", "felon", "fill"], correctWord: "felon", shortInstructions: true},
    {words: ["fender", "finger", "fundraiser"], correctWord: "fender", shortInstructions: true}
  ]
});
