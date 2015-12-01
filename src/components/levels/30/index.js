import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  number: 26,
  title: "Consonant 'b' With Short Vowels",
  activityCount: 10,
  lessonLetters: ["ba", "be", "bi", "bo", "bu"],
  lessonWords: ["bat", "beg", "bib", "box", "bug"],
  activityData: [
    {word: "bed", letters: ["ba", "be", "bi"], correct: "be"},
    {word: "bomb", letters: ["bo", "ba", "bi"], correct: "bo", wordsOnly: true},
    {word: "back", letters: ["bo", "ba", "be"], correct: "ba", wordsOnly: true},
    {word: "big", letters: ["be", "bi", "bu"], correct: "bi", wordsOnly: true},
    {word: "bucket", letters: ["ba", "bi", "bu"], correct: "bu", wordsOnly: true},
    {word: "badge", letters: ["ba", "be", "bu"], correct: "ba", wordsOnly: true},
    {word: "bin", letters: ["bo", "be", "bi"], correct: "bi", wordsOnly: true},
    {word: "bunny", letters: ["be", "bo", "bu"], correct: "bu", wordsOnly: true},
    {word: "bench", letters: ["be", "bi", "bu"], correct: "be", wordsOnly: true},
    {word: "bottom", letters: ["ba", "bo", "bu"], correct: "bo", wordsOnly: true}
  ]
});
