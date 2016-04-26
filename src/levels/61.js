import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "61",
  consonant: "k",
  vowel: "i",
  lessonWords: ["kick", "kilt", "kitchen"],
  activities: [
    {words: ["comet", "kid", "cut"], correctWord: "kid"},
    {words: ["cat", "coat", "kitten"], correctWord: "kitten", wordsOnly: true},
    {words: ["keg", "kick", "cake"], correctWord: "kick", wordsOnly: true},
    {words: ["camel", "kennel", "kibble"], correctWord: "kibble", wordsOnly: true},
    {words: ["kiss", "keys", "castle"], correctWord: "kiss", wordsOnly: true},
    {words: ["Kim", "camera", "Ken"], correctWord: "Kim", wordsOnly: true},
    {words: ["kitchen", "ketchup", "customer"], correctWord: "kitchen", wordsOnly: true},
    {words: ["candy", "kidney", "kangaroo"], correctWord: "kidney", wordsOnly: true},
    {words: ["cold", "call", "kilt"], correctWord: "kilt", wordsOnly: true}
  ]
});
