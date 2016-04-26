import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "53",
  consonant: "h",
  lessonLetters: ["ha", "he", "hi", "ho", "hu"],
  lessonWords: ["hat", "head", "hiss", "hop", "hug"],
  activities: [
    {word: "hit", letters: ["hi", "he", "hu"], correctLetters: "hi"},
    {word: "hot", letters: ["hu", "ho", "ha"], correctLetters: "ho", wordsOnly: true},
    {word: "hen", letters: ["hu", "he", "hi"], correctLetters: "he", wordsOnly: true},
    {word: "hut", letters: ["ho", "ha", "hu"], correctLetters: "hu", wordsOnly: true},
    {word: "half", letters: ["ha", "he", "hi"], correctLetters: "ha", wordsOnly: true},
    {word: "heavy", letters: ["he", "ha", "hi"], correctLetters: "he", wordsOnly: true},
    {word: "huddle", letters: ["he", "ho", "hu"], correctLetters: "hu", wordsOnly: true},
    {word: "happy", letters: ["hu", "ho", "ha"], correctLetters: "ha", wordsOnly: true},
    {word: "hinge", letters: ["he", "hi", "ho"], correctLetters: "hi", wordsOnly: true},
    {word: "holiday", letters: ["hu", "ho", "ha"], correctLetters: "ho", wordsOnly: true}
  ]
});
