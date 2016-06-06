import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "28",
  consonant: "c",
  vowel: "o",
  lessonWords: ["cop", "cob", "costume"],
  activities: [
    {words: ["cot", "cut", "cat"], correctWord: "cot"},
    {words: ["clock", "comet", "camera"], correctWord: "comet", shortInstructions: true},
    {words: ["comic", "cuff", "kick"], correctWord: "comic", shortInstructions: true},
    {words: ["cotton", "candle", "cuddle"], correctWord: "cotton", shortInstructions: true},
    {words: ["cupcake", "copper", "cupboard"], correctWord: "copper", shortInstructions: true},
    {words: ["castle", "concert", "customer"], correctWord: "concert", shortInstructions: true},
    {words: ["camel", "call", "collar"], correctWord: "collar", shortInstructions: true}
  ]
});
