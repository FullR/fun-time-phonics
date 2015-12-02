import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 61,
  letter: "k",
  vowel: "i",
  lessonWords: ["kick", "kilt", "kitchen"],
  activityData: [
    {words: ["comet", "kid", "cut"], correct: "kid"},
    {words: ["cat", "coat", "kitten"], correct: "kitten", wordsOnly: true},
    {words: ["keg", "kick", "cake"], correct: "kick", wordsOnly: true},
    {words: ["camel", "kennel", "kibble"], correct: "kibble", wordsOnly: true},
    {words: ["kiss", "keys", "castle"], correct: "kiss", wordsOnly: true},
    {words: ["Kim", "camera", "Ken"], correct: "Kim", wordsOnly: true},
    {words: ["kitchen", "ketchup", "customer"], correct: "kitchen", wordsOnly: true},
    {words: ["candy", "kidney", "kangaroo"], correct: "kidney", wordsOnly: true},
    {words: ["cold", "call", "kilt"], correct: "kilt", wordsOnly: true}
  ]
});
