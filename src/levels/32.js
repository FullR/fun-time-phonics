import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "32",
  consonant: "d",
  vowel: "e",
  lessonWords: ["dent", "desk", "deli"],
  activities: [
    {words: ["duck", "dock", "desk"], correctWord: "desk"},
    {words: ["dead", "dress", "dip"], correctWord: "dead", shortInstructions: true},
    {words: ["Dan", "den", "dunk"], correctWord: "den", shortInstructions: true},
    {words: ["dive", "devil", "dove"], correctWord: "devil", shortInstructions: true},
    {words: ["domino", "dummy", "denim"], correctWord: "denim", shortInstructions: true},
    {words: ["desert", "dizzy", "daisy"], correctWord: "desert", shortInstructions: true},
    {words: ["dancer", "dentist", "doctor"], correctWord: "dentist", shortInstructions: true}
  ]
});
