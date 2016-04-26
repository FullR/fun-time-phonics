import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "32",
  consonant: "d",
  vowel: "e",
  lessonWords: ["dent", "desk", "deli"],
  activities: [
    {words: ["duck", "dock", "desk"], correctWord: "desk"},
    {words: ["dead", "dress", "dip"], correctWord: "dead", wordsOnly: true},
    {words: ["Dan", "den", "dunk"], correctWord: "den", wordsOnly: true},
    {words: ["dive", "devil", "dove"], correctWord: "devil", wordsOnly: true},
    {words: ["domino", "dummy", "denim"], correctWord: "denim", wordsOnly: true},
    {words: ["desert", "dizzy", "daisy"], correctWord: "desert", wordsOnly: true},
    {words: ["dancer", "dentist", "doctor"], correctWord: "dentist", wordsOnly: true}
  ]
});
