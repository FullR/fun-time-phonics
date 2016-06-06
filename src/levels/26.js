import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "26",
  consonant: "b",
  lessonLetters: ["ba", "be", "bi", "bo", "bu"],
  lessonWords: ["bat", "beg", "bib", "box", "bug"],
  activities: [
    {word: "bed", letters: ["ba", "be", "bi"], correctLetters: "be"},
    {word: "bomb", letters: ["bo", "ba", "bi"], correctLetters: "bo", shortInstructions: true},
    {word: "back", letters: ["bo", "ba", "be"], correctLetters: "ba", shortInstructions: true},
    {word: "big", letters: ["be", "bi", "bu"], correctLetters: "bi", shortInstructions: true},
    {word: "bucket", letters: ["ba", "bi", "bu"], correctLetters: "bu", shortInstructions: true},
    {word: "badge", letters: ["ba", "be", "bu"], correctLetters: "ba", shortInstructions: true},
    {word: "bin", letters: ["bo", "be", "bi"], correctLetters: "bi", shortInstructions: true},
    {word: "bunny", letters: ["be", "bo", "bu"], correctLetters: "bu", shortInstructions: true},
    {word: "bench", letters: ["be", "bi", "bu"], correctLetters: "be", shortInstructions: true},
    {word: "bottom", letters: ["ba", "bo", "bu"], correctLetters: "bo", shortInstructions: true}
  ]
});
