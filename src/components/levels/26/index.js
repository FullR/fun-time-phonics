import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  number: 26,
  title: "Consonant 'b' With Short Vowels",
  subtitle: "Lesson 26",
  letters: ["ba", "be", "bi", "bo", "bu"],
  lessonWords: ["bat", "beg", "bib", "box", "bug"],
  activityData: [
    {word: "bed", letters: ["ba", "be", "bi"], correct: "be"},
    {word: "bomb", letters: ["bo", "ba", "bi"], correct: "bo"},
    {word: "back", letters: ["bo", "ba", "be"], correct: "ba"},
    {word: "big", letters: ["be", "bi", "bu"], correct: "bi"},
    {word: "bucket", letters: ["ba", "bi", "bu"], correct: "bu"},
    {word: "badge", letters: ["ba", "be", "bu"], correct: "ba"},
    {word: "bin", letters: ["bo", "be", "bi"], correct: "bi"},
    {word: "bunny", letters: ["be", "bo", "bu"], correct: "bu"},
    {word: "bench", letters: ["be", "bi", "bu"], correct: "be"},
    {word: "bottom", letters: ["ba", "bo", "bu"], correct: "bo"}
  ]
});
