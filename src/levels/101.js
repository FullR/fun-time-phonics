import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "101",
  consonant: "s",
  lessonLetters: ["sa", "se", "si", "so", "su"],
  lessonWords: ["sad", "set", "sip", "sock", "sun"],
  activities: [
    {word: "sit", letters: ["sa", "se", "si"], correctLetters: "si"},
    {word: "sack", letters: ["sa", "se", "si"], correctLetters: "sa", shortInstructions: true},
    {word: "sob", letters: ["sa", "su", "so"], correctLetters: "so", shortInstructions: true},
    {word: "seven", letters: ["se", "si", "so"], correctLetters: "se", shortInstructions: true},
    {word: "suds", letters: ["se", "si", "su"], correctLetters: "su", shortInstructions: true},
    {word: "soccer", letters: ["su", "so", "sa"], correctLetters: "so", shortInstructions: true},
    {word: "sick", letters: ["sa", "se", "si"], correctLetters: "si", shortInstructions: true},
    {word: "sax", letters: ["sa", "si", "so"], correctLetters: "sa", shortInstructions: true},
    {word: "send", letters: ["se", "si", "sa"], correctLetters: "se", shortInstructions: true},
    {word: "sundae", letters: ["so", "su", "si"], correctLetters: "su", shortInstructions: true}
  ]
});
