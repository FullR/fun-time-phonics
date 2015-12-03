import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  letter: "s",
  number: 101,
  lessonLetters: ["sa", "se", "si", "so", "su"],
  lessonWords: ["sad", "set", "sip", "sock", "sun"],
  activityData: [
    {word: "sit", letters: ["sa", "se", "si"], correct: "si"},
    {word: "sack", letters: ["sa", "se", "si"], correct: "sa", wordsOnly: true},
    {word: "sob", letters: ["sa", "su", "so"], correct: "so", wordsOnly: true},
    {word: "seven", letters: ["se", "si", "so"], correct: "se", wordsOnly: true},
    {word: "suds", letters: ["se", "si", "su"], correct: "su", wordsOnly: true},
    {word: "soccer", letters: ["su", "so", "sa"], correct: "so", wordsOnly: true},
    {word: "sick", letters: ["sa", "se", "si"], correct: "si", wordsOnly: true},
    {word: "sax", letters: ["sa", "si", "so"], correct: "sa", wordsOnly: true},
    {word: "send", letters: ["se", "si", "sa"], correct: "se", wordsOnly: true},
    {word: "sundae", letters: ["so", "su", "si"], correct: "su", wordsOnly: true}
  ]
});
