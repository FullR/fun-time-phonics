import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  letter: "m",
  number: 75,
  lessonLetters: ["ma", "me", "mi", "mo", "mu"],
  lessonWords: ["map", "mesh", "mitt", "mom", "mug"],
  activityData: [
    {word: "mop", letters: ["mo", "mu", "ma"], correct: "mo"},
    {word: "mask", letters: ["me", "ma", "mu"], correct: "ma", wordsOnly: true},
    {word: "mitten", letters: ["ma", "mi", "me"], correct: "mi", wordsOnly: true},
    {word: "mummy", letters: ["me", "mo", "mu"], correct: "mu", wordsOnly: true},
    {word: "medal", letters: ["mo", "mi", "me"], correct: "me", wordsOnly: true},
    {word: "monster", letters: ["mu", "mo", "ma"], correct: "mo", wordsOnly: true},
    {word: "melon", letters: ["ma", "me", "mi"], correct: "me", wordsOnly: true},
    {word: "magic", letters: ["ma", "me", "mi"], correct: "ma", wordsOnly: true},
    {word: "middle", letters: ["mi", "me", "mo"], correct: "mi", wordsOnly: true},
    {word: "muffin", letters: ["mo", "mi", "mu"], correct: "mu", wordsOnly: true}
  ]
});
