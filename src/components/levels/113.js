import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  letter: "v",
  number: 113,
  lessonLetters: ["va", "ve", "vi", "vo", "vu"],
  lessonWords: ["vat", "vet", "vigil", "vomit", "vulture"],
  activityData: [
    {word: "vest", letters: ["va", "ve", "vu"], correct: "ve"},
    {word: "vacuum", letters: ["va", "vo", "vu"], correct: "va", wordsOnly: true},
    {word: "victim", letters: ["ve", "va", "vi"], correct: "vi", wordsOnly: true},
    {word: "vulture", letters: ["vo", "ve", "vu"], correct: "vu", wordsOnly: true},
    {word: "valley", letters: ["va", "ve", "vo"], correct: "va", wordsOnly: true},
    {word: "volleyball", letters: ["vo", "vu", "va"], correct: "vo", wordsOnly: true},
    {word: "vegetables", letters: ["vo", "ve", "vi"], correct: "ve", wordsOnly: true},
    {word: "villain", letters: ["ve", "vi", "vu"], correct: "vi", wordsOnly: true}
  ]
});
