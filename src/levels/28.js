import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "28",
  consonant: "c",
  vowel: "o",
  lessonWords: ["cop", "cob", "costume"],
  activities: [
    {words: ["cot", "cut", "cat"], correctWord: "cot"},
    {words: ["clock", "comet", "camera"], correctWord: "comet", wordsOnly: true},
    {words: ["comic", "cuff", "kick"], correctWord: "comic", wordsOnly: true},
    {words: ["cotton", "candle", "cuddle"], correctWord: "cotton", wordsOnly: true},
    {words: ["cupcake", "copper", "cupboard"], correctWord: "copper", wordsOnly: true},
    {words: ["castle", "concert", "customer"], correctWord: "concert", wordsOnly: true},
    {words: ["camel", "call", "collar"], correctWord: "collar", wordsOnly: true}
  ]
});
