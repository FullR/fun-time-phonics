import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "101",
  consonant: "s",
  lessonLetters: ["sa", "se", "si", "so", "su"],
  lessonWords: ["sad", "set", "sip", "sock", "sun"],
  activities: [
    {word: "sit", letters: ["sa", "se", "si"], correctLetters: "si"},
    {word: "sack", letters: ["sa", "se", "si"], correctLetters: "sa", wordsOnly: true},
    {word: "sob", letters: ["sa", "su", "so"], correctLetters: "so", wordsOnly: true},
    {word: "seven", letters: ["se", "si", "so"], correctLetters: "se", wordsOnly: true},
    {word: "suds", letters: ["se", "si", "su"], correctLetters: "su", wordsOnly: true},
    {word: "soccer", letters: ["su", "so", "sa"], correctLetters: "so", wordsOnly: true},
    {word: "sick", letters: ["sa", "se", "si"], correctLetters: "si", wordsOnly: true},
    {word: "sax", letters: ["sa", "si", "so"], correctLetters: "sa", wordsOnly: true},
    {word: "send", letters: ["se", "si", "sa"], correctLetters: "se", wordsOnly: true},
    {word: "sundae", letters: ["so", "su", "si"], correctLetters: "su", wordsOnly: true}
  ]
});
