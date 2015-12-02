import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 28,
  letter: "c",
  vowel: "o",
  lessonWords: ["cop", "cob", "costume"],
  activityData: [
    {words: ["cot", "cut", "cat"], correct: "cot"},
    {words: ["clock", "cornet", "camera"], correct: "cornet", wordsOnly: true},
    {words: ["comic", "cuff", "kick"], correct: "comic", wordsOnly: true},
    {words: ["cotton", "candle", "cuddle"], correct: "cotton", wordsOnly: true},
    {words: ["cupcake", "copper", "cupboard"], correct: "copper", wordsOnly: true},
    {words: ["castle", "concert", "customer"], correct: "concert", wordsOnly: true},
    {words: ["camel", "call", "collar"], correct: "collar", wordsOnly: true}
  ]
});
