import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "62",
  consonant: "k",
  lessonLetters: ["ke", "ki"],
  lessonWords: ["keg", "kick"],
  activities: [
    {word: "kitten", letters: ["ke", "ki", "co"], correctLetters: "ki"},
    {word: "ketchup", letters: ["ke", "ki", "cu"], correctLetters: "ke", shortInstructions: true},
    {word: "kid", letters: ["ke", "ca", "ki"], correctLetters: "ki", shortInstructions: true},
    {word: "kettle", letters: ["ke", "ki", "cu"], correctLetters: "ke", shortInstructions: true},
    {word: "kidney", letters: ["ke", "ki", "co"], correctLetters: "ki", shortInstructions: true}
  ]
});
