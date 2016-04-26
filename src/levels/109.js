import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["valley", "vest", "video", "volleyball", "vulture"],
  id: "109",
  consonant: "v",
  vowel: "a",
  lessonWords: ["vat", "valet", "vaccinate"],
  activities: [
    {words: ["vat", "vet", "vote"], correctWord: "vat"},
    {words: ["volume", "villain", "valley"], correctWord: "valley", wordsOnly: true},
    {words: ["victim", "vacuum", "viking"], correctWord: "vacuum", wordsOnly: true},
    {words: ["veil", "valve", "violin"], correctWord: "valve", wordsOnly: true},
    {words: ["volcano", "video", "vanity"], correctWord: "vanity", wordsOnly: true},
    {words: ["volleyball", "valuables", "vegetables"], correctWord: "valuables", wordsOnly: true},
    {words: ["vampire", "visitor", "volunteer"], correctWord: "vampire", wordsOnly: true}
  ]
});
