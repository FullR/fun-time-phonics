import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  letterIntro: true,
  exampleWords: ["valley", "vest", "video", "volleyball", "vulture"],
  number: 109,
  letter: "v",
  vowel: "a",
  lessonWords: ["vat", "valet", "vaccinate"],
  activityData: [
    {words: ["vat", "vet", "vote"], correct: "vat"},
    {words: ["volume", "villain", "valley"], correct: "valley", wordsOnly: true},
    {words: ["victim", "vacuum", "viking"], correct: "vacuum", wordsOnly: true},
    {words: ["veil", "valve", "violin"], correct: "valve", wordsOnly: true},
    {words: ["volcano", "video", "vanity"], correct: "vanity", wordsOnly: true},
    {words: ["volleyball", "valuables", "vegetables"], correct: "valuables", wordsOnly: true},
    {words: ["vampire", "visitor", "volunteer"], correct: "vampire", wordsOnly: true}
  ]
});
