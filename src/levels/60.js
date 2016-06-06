import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "60",
  
  consonant: "k",
  vowel: "e",
  letterIntroWords: ["kangaroo", "kettle", "kitchen"],
  lessonWords: ["kelp", "kettle", "Kevin"],
  activities: [
    {words: ["keg", "king", "cake"], correctWord: "keg"},
    {words: ["camel", "kennel", "kitten"], correctWord: "kennel", shortInstructions: true},
    {words: ["cactus", "kitchen", "ketchup"], correctWord: "ketchup", shortInstructions: true},
    {words: ["Kim", "can", "Ken"], correctWord: "Ken", shortInstructions: true},
    {words: ["cuddle", "kettle", "candle"], correctWord: "kettle", shortInstructions: true},
    {words: ["cold", "call", "kelp"], correctWord: "kelp", shortInstructions: true},
    {words: ["coffee", "Kevin", "cover"], correctWord: "Kevin", shortInstructions: true}
  ]
});
