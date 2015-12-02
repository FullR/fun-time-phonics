import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 32,
  letter: "d",
  vowel: "e",
  lessonWords: ["dent", "desk", "deli"],
  activityData: [
    {words: ["duck", "dock", "desk"], correct: "desk"},
    {words: ["dead", "dress", "dip"], correct: "dead", wordsOnly: true},
    {words: ["Dan", "den", "dunk"], correct: "den", wordsOnly: true},
    {words: ["dive", "devil", "dove"], correct: "devil", wordsOnly: true},
    {words: ["domino", "dummy", "denim"], correct: "denim", wordsOnly: true},
    {words: ["desert", "dizzy", "daisy"], correct: "desert", wordsOnly: true},
    {words: ["dancer", "dentist", "doctor"], correct: "dentist", wordsOnly: true}
  ]
});
