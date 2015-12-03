import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  letter: "w",
  number: 117,
  lessonLetters: ["wa", "we", "wi", "wo"],
  lessonWords: ["wag", "west", "win", "wok"],
  activityData: [
    {word: "wig", letters: ["we", "wi", "wa"], correct: "wi"},
    {word: "wet", letters: ["we", "wi", "wa"], correct: "we", wordsOnly: true},
    {word: "wok", letters: ["vo", "wu", "wo"], correct: "wo", wordsOnly: true},
    {word: "wagon", letters: ["wi", "wa", "wu"], correct: "wa", wordsOnly: true},
    {word: "wind", letters: ["we", "vi", "wi"], correct: "wi", wordsOnly: true},
    {word: "well", letters: ["we", "wi", "wa"], correct: "we", wordsOnly: true}
  ]
});
