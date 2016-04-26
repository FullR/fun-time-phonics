import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["quack", "question", "quilt"],
  id: "89",
  consonant: "q",
  vowel: "u",
  lessonWords: [],
  activities: [
    {words: ["jump", "ball", "quilt"], correctWord: "quilt"},
    {words: ["bull", "question", "run"], correctWord: "question", wordsOnly: true},
    {words: ["gull", "run", "quack"], correctWord: "quack", wordsOnly: true}
  ]
});
