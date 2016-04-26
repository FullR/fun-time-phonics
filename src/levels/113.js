import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "113",
  consonant: "v",
  lessonLetters: ["va", "ve", "vi", "vo", "vu"],
  lessonWords: ["vat", "vet", "vigil", "vomit", "vulture"],
  activities: [
    {word: "vest", letters: ["va", "ve", "vu"], correctLetters: "ve"},
    {word: "vacuum", letters: ["va", "vo", "vu"], correctLetters: "va", wordsOnly: true},
    {word: "victim", letters: ["ve", "va", "vi"], correctLetters: "vi", wordsOnly: true},
    {word: "vulture", letters: ["vo", "ve", "vu"], correctLetters: "vu", wordsOnly: true},
    {word: "valley", letters: ["va", "ve", "vo"], correctLetters: "va", wordsOnly: true},
    {word: "volleyball", letters: ["vo", "vu", "va"], correctLetters: "vo", wordsOnly: true},
    {word: "vegetables", letters: ["vo", "ve", "vi"], correctLetters: "ve", wordsOnly: true},
    {word: "villain", letters: ["ve", "vi", "vu"], correctLetters: "vi", wordsOnly: true}
  ]
});
