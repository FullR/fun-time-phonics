import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  letterIntro: true,
  exampleWords: ["wag", "web", "wind", "wok"],
  number: 114,
  letter: "w",
  vowel: "a",
  lessonWords: ["wacky", "waxer", "waft"],
  activityData: [
    {words: ["rag", "wag", "wok"], correct: "wag"},
    {words: ["wax", "wick", "west"], correct: "wax", wordsOnly: true},
    {words: ["weapon", "woman", "wagon"], correct: "wagon", wordsOnly: true}
  ]
});
