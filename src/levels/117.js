import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "117",
  consonant: "w",
  lessonLetters: ["wa", "we", "wi", "wo"],
  lessonWords: ["wag", "west", "win", "wok"],
  activities: [
    {word: "wig", letters: ["we", "wi", "wa"], correctLetters: "wi"},
    {word: "wet", letters: ["we", "wi", "wa"], correctLetters: "we", wordsOnly: true},
    {word: "wok", letters: ["vo", "wu", "wo"], correctLetters: "wo", wordsOnly: true},
    {word: "wagon", letters: ["wi", "wa", "wu"], correctLetters: "wa", wordsOnly: true},
    {word: "wind", letters: ["we", "vi", "wi"], correctLetters: "wi", wordsOnly: true},
    {word: "well", letters: ["we", "wi", "wa"], correctLetters: "we", wordsOnly: true}
  ]
});
