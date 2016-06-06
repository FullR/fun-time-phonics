import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "31",
  
  consonant: "d",
  vowel: "a",
  letterIntroWords: ["dab", "deli", "dig", "dock", "dummy"],
  lessonWords: ["dad", "Daphne", "dashboard"],
  activities: [
    {words: ["dash", "dish", "desk"], correctWord: "dash"},
    {words: ["dad", "dead", "dome"], correctWord: "dad", shortInstructions: true},
    {words: ["drag", "dagger", "dog"], correctWord: "dagger", shortInstructions: true},
    {words: ["dime", "dab", "dip"], correctWord: "dab", shortInstructions: true},
    {words: ["dresser", "dinner", "dancer"], correctWord: "dancer", shortInstructions: true},
    {words: ["devil", "daffodil", "duffel"], correctWord: "daffodil", shortInstructions: true},
    {words: ["dumbbell", "doctor", "dashboard"], correctWord: "dashboard", shortInstructions: true}
  ]
});
