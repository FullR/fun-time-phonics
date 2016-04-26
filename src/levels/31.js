import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "31",
  
  consonant: "d",
  vowel: "a",
  letterIntroWords: ["dab", "deli", "dig", "dock", "dummy"],
  lessonWords: ["dad", "Daphne", "dashboard"],
  activities: [
    {words: ["dash", "dish", "desk"], correctWord: "dash"},
    {words: ["dad", "dead", "dome"], correctWord: "dad", wordsOnly: true},
    {words: ["drag", "dagger", "dog"], correctWord: "dagger", wordsOnly: true},
    {words: ["dime", "dab", "dip"], correctWord: "dab", wordsOnly: true},
    {words: ["dresser", "dinner", "dancer"], correctWord: "dancer", wordsOnly: true},
    {words: ["devil", "daffodil", "duffel"], correctWord: "daffodil", wordsOnly: true},
    {words: ["dumbbell", "doctor", "dashboard"], correctWord: "dashboard", wordsOnly: true}
  ]
});
