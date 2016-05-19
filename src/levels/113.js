import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "113",
  consonant: "v",
  lessonLetters: ["va", "ve", "vi", "vo"],
  lessonWords: ["vat", "vet", "vigil", "vomit"],
  activities: [
    {word: "vest", letters: ["va", "ve", "vi"], correctLetters: "ve"},
    {word: "vacuum", letters: ["va", "vo", "ve"], correctLetters: "va", wordsOnly: true},
    {word: "victim", letters: ["ve", "va", "vi"], correctLetters: "vi", wordsOnly: true},
    {word: "valley", letters: ["va", "ve", "vo"], correctLetters: "va", wordsOnly: true},
    {word: "volleyball", letters: ["vo", "va", "ve"], correctLetters: "vo", wordsOnly: true},
    {word: "vegetables", letters: ["vo", "ve", "vi"], correctLetters: "ve", wordsOnly: true},
    {word: "villain", letters: ["ve", "vi", "va"], correctLetters: "vi", wordsOnly: true}
  ]
});
