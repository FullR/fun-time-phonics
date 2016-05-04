import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "117",
  consonant: "w",
  lessonLetters: ["wa", "we", "wi"],
  lessonWords: ["wag", "west", "win"],
  activities: [
    {word: "wig", letters: ["we", "wi", "wa"], correctLetters: "wi"},
    {word: "wet", letters: ["we", "wi", "wa"], correctLetters: "we", wordsOnly: true},
    {word: "wagon", letters: ["wi", "wa", "wu"], correctLetters: "wa", wordsOnly: true},
    {word: "wind", letters: ["we", "wa", "wi"], correctLetters: "wi", wordsOnly: true},
    {word: "well", letters: ["we", "wi", "wa"], correctLetters: "we", wordsOnly: true}
  ]
});
