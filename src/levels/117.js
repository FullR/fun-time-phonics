import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "117",
  consonant: "w",
  lessonLetters: ["wa", "we", "wi"],
  lessonWords: ["wag", "west", "win"],
  activities: [
    {word: "wig", letters: ["we", "wi", "wa"], correctLetters: "wi"},
    {word: "wet", letters: ["we", "wi", "wa"], correctLetters: "we", shortInstructions: true},
    {word: "wagon", letters: ["wi", "wa", "we"], correctLetters: "wa", shortInstructions: true},
    {word: "wind", letters: ["we", "wa", "wi"], correctLetters: "wi", shortInstructions: true},
    {word: "well", letters: ["we", "wi", "wa"], correctLetters: "we", shortInstructions: true}
  ]
});
