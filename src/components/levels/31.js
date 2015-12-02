import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 31,
  letterIntro: true,
  letter: "d",
  vowel: "a",
  exampleWords: ["dab", "deli", "dig", "dock", "dummy"],
  lessonWords: ["dad", "Daphne", "dashboard"],
  activityData: [
    {words: ["dash", "dish", "desk"], correct: "dash"},
    {words: ["dad", "dead", "dome"], correct: "dad", wordsOnly: true},
    {words: ["drag", "dagger", "dog"], correct: "dagger", wordsOnly: true},
    {words: ["dime", "dab", "dip"], correct: "dab", wordsOnly: true},
    {words: ["dresser", "dinner", "dancer"], correct: "dancer", wordsOnly: true},
    {words: ["devil", "daffodil", "duffel"], correct: "daffodil", wordsOnly: true},
    {words: ["dumbbell", "doctor", "dashboard"], correct: "dashboard", wordsOnly: true}
  ]
});
