import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  title: "Consonant \"h\" With Short Vowels Review",
  number: 53,
  lessonLetters: ["ha", "he", "hi", "ho", "hu"],
  lessonWords: ["hat", "head", "hiss", "hop", "hug"],
  activityData: [
    {word: "hit", letters: ["hi", "he", "hu"], correct: "hi"},
    {word: "hot", letters: ["hu", "ho", "ha"], correct: "ho", wordsOnly: true},
    {word: "hen", letters: ["hu", "he", "hi"], correct: "he", wordsOnly: true},
    {word: "hut", letters: ["ho", "ha", "hu"], correct: "hu", wordsOnly: true},
    {word: "half", letters: ["ha", "he", "hi"], correct: "ha", wordsOnly: true},
    {word: "heavy", letters: ["he", "ha", "hi"], correct: "he", wordsOnly: true},
    {word: "huddle", letters: ["he", "ho", "hu"], correct: "hu", wordsOnly: true},
    {word: "happy", letters: ["hu", "ho", "ha"], correct: "ha", wordsOnly: true},
    {word: "hinge", letters: ["he", "hi", "ho"], correct: "hi", wordsOnly: true},
    {word: "holiday", letters: ["hu", "ho", "ha"], correct: "ho", wordsOnly: true}
  ]
});
