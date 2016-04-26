import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["wag", "web", "wind", "wok"],
  id: "114",
  consonant: "w",
  vowel: "a",
  lessonWords: ["wacky", "waxer", "waft"],
  activities: [
    {words: ["rag", "wag", "wok"], correctWord: "wag"},
    {words: ["wax", "wick", "west"], correctWord: "wax", wordsOnly: true},
    {words: ["weapon", "woman", "wagon"], correctWord: "wagon", wordsOnly: true}
  ]
});
