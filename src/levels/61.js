import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "61",
  consonant: "k",
  vowel: "i",
  lessonWords: ["kick", "kilt", "kitchen"],
  activities: [
    {words: ["comet", "kid", "cut"], correctWord: "kid"},
    {words: ["cat", "coat", "kitten"], correctWord: "kitten", shortInstructions: true},
    {words: ["keg", "kick", "cake"], correctWord: "kick", shortInstructions: true},
    {words: ["camel", "kennel", "kibble"], correctWord: "kibble", shortInstructions: true},
    {words: ["kiss", "keys", "castle"], correctWord: "kiss", shortInstructions: true},
    {words: ["Kim", "camera", "Ken"], correctWord: "Kim", shortInstructions: true},
    {words: ["kitchen", "ketchup", "customer"], correctWord: "kitchen", shortInstructions: true},
    {words: ["candy", "kidney", "kangaroo"], correctWord: "kidney", shortInstructions: true},
    {words: ["cold", "call", "kilt"], correctWord: "kilt", shortInstructions: true}
  ]
});
