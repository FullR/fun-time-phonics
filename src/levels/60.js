import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "60",
  
  consonant: "k",
  vowel: "e",
  letterIntroWords: ["kangaroo", "kettle", "kitchen"],
  lessonWords: ["kelp", "kettle", "Kevin"],
  activities: [
    {words: ["keg", "king", "cake"], correctWord: "keg"},
    {words: ["camel", "kennel", "kitten"], correctWord: "kennel", wordsOnly: true},
    {words: ["cactus", "kitchen", "ketchup"], correctWord: "ketchup", wordsOnly: true},
    {words: ["Kim", "can", "Ken"], correctWord: "Ken", wordsOnly: true},
    {words: ["cuddle", "kettle", "candle"], correctWord: "kettle", wordsOnly: true},
    {words: ["cold", "call", "kelp"], correctWord: "kelp", wordsOnly: true},
    {words: ["coffee", "Kevin", "cover"], correctWord: "Kevin", wordsOnly: true}
  ]
});
