import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  letterIntroWords: ["valley", "vest", "video", "volleyball"],
  id: "109",
  consonant: "v",
  vowel: "a",
  lessonWords: ["vat", "valet", "vaccinate"],
  activities: [
    {words: ["vat", "vet", "vote"], correctWord: "vat"},
    {words: ["volume", "villain", "valley"], correctWord: "valley", shortInstructions: true},
    {words: ["victim", "vacuum", "viking"], correctWord: "vacuum", shortInstructions: true},
    {words: ["veil", "valve", "violin"], correctWord: "valve", shortInstructions: true},
    {words: ["volcano", "video", "vanity"], correctWord: "vanity", shortInstructions: true},
    {words: ["volleyball", "valuables", "vegetables"], correctWord: "valuables", shortInstructions: true},
    {words: ["vampire", "visitor", "volunteer"], correctWord: "vampire", shortInstructions: true}
  ]
});
