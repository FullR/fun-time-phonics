import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  title: "Consonant \"b\" With Short Vowels Review",
  number: 62,
  lessonLetters: ["ke", "ki"],
  lessonWords: ["keg", "kick"],
  activityData: [
    {word: "kitten", letters: ["ke", "ki", "co"], correct: "ki"},
    {word: "ketchup", letters: ["ke", "ki", "cu"], correct: "ke", wordsOnly: true},
    {word: "kid", letters: ["ke", "ca", "ki"], correct: "ki", wordsOnly: true},
    {word: "kettle", letters: ["ke", "ki", "cu"], correct: "ke", wordsOnly: true},
    {word: "kidney", letters: ["ke", "ki", "co"], correct: "ki", wordsOnly: true}
  ]
});
