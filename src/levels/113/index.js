import consonantVowelReview from "levels/consonant-vowel-review-level";
require("./style.scss");

export default consonantVowelReview({
  id: "113",
  consonant: "v",
  lessonLetters: ["va", "ve", "vi", "vo"],
  lessonWords: ["vat", "vet", "vigil", "vomit"],
  activities: [
    {word: "vest", letters: ["va", "ve", "vi"], correctLetters: "ve"},
    {word: "vacuum", letters: ["va", "vo", "ve"], correctLetters: "va", shortInstructions: true},
    {word: "victim", letters: ["ve", "va", "vi"], correctLetters: "vi", shortInstructions: true},
    {word: "valley", letters: ["va", "ve", "vo"], correctLetters: "va", shortInstructions: true},
    {word: "volleyball", letters: ["vo", "va", "ve"], correctLetters: "vo", shortInstructions: true},
    {word: "vegetables", letters: ["vo", "ve", "vi"], correctLetters: "ve", shortInstructions: true},
    {word: "villain", letters: ["ve", "vi", "va"], correctLetters: "vi", shortInstructions: true}
  ]
});
