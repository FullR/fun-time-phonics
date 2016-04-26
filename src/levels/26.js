import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "26",
  consonant: "b",
  lessonLetters: ["ba", "be", "bi", "bo", "bu"],
  lessonWords: ["bat", "beg", "bib", "box", "bug"],
  activities: [
    {word: "bed", letters: ["ba", "be", "bi"], correctLetters: "be"},
    {word: "bomb", letters: ["bo", "ba", "bi"], correctLetters: "bo", wordsOnly: true},
    {word: "back", letters: ["bo", "ba", "be"], correctLetters: "ba", wordsOnly: true},
    {word: "big", letters: ["be", "bi", "bu"], correctLetters: "bi", wordsOnly: true},
    {word: "bucket", letters: ["ba", "bi", "bu"], correctLetters: "bu", wordsOnly: true},
    {word: "badge", letters: ["ba", "be", "bu"], correctLetters: "ba", wordsOnly: true},
    {word: "bin", letters: ["bo", "be", "bi"], correctLetters: "bi", wordsOnly: true},
    {word: "bunny", letters: ["be", "bo", "bu"], correctLetters: "bu", wordsOnly: true},
    {word: "bench", letters: ["be", "bi", "bu"], correctLetters: "be", wordsOnly: true},
    {word: "bottom", letters: ["ba", "bo", "bu"], correctLetters: "bo", wordsOnly: true}
  ]
});
