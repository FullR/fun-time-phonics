import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  title: "Consonant 'g' With Short Vowels",
  number: 47,
  lessonLetters: ["ga", "ge", "gi", "go", "gu"],
  lessonWords: ["gas", "gecko", "gift", "god", "gush"],
  activityData: [
    {word: "", letters: ["go", "gu", "gi"], correct: ""},
    {word: "", letters: ["ga", "go", "gu"], correct: "", wordsOnly: true},
    {word: "", letters: ["ga", "gu", "go"], correct: "", wordsOnly: true},
    {word: "", letters: ["ge", "gi", "gu"], correct: "", wordsOnly: true},
    {word: "", letters: ["gu", "go", "ga"], correct: "", wordsOnly: true},
    {word: "", letters: ["ga", "ge", "gi"], correct: "", wordsOnly: true},
    {word: "", letters: ["gu", "gi", "go"], correct: "", wordsOnly: true},
    {word: "", letters: ["gi", "ga", "ge"], correct: "", wordsOnly: true}
  ]
});
