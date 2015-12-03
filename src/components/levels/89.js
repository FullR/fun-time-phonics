import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  letterIntro: true,
  exampleWords: ["quack", "question", "quilt"],
  number: 89,
  letter: "q",
  vowel: "u",
  lessonWords: [],
  activityData: [
    {words: ["jump", "ball", "quilt"], correct: "quilt"},
    {words: ["bull", "question", "run"], correct: "question", wordsOnly: true},
    {words: ["gull", "run", "quack"], correct: "quack", wordsOnly: true}
  ]
});
