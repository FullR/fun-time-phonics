import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  letterIntroWords: ["quack", "question", "quilt"],
  id: "89",
  consonant: "q",
  vowel: "u",
  lessonWords: [],
  activities: [
    {words: ["jump", "ball", "quilt"], correctWord: "quilt"},
    {words: ["bull", "question", "run"], correctWord: "question", shortInstructions: true},
    {words: ["gull", "bus", "quack"], correctWord: "quack", shortInstructions: true}
  ]
});
