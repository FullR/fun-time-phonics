import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 60,
  letterIntro: true,
  letter: "k",
  vowel: "e",
  exampleWords: ["kangaroo", "kettle", "kitchen"],
  lessonWords: ["kelp", "kettle", "Kevin"],
  activityData: [
    {words: ["keg", "king", "cake"], correct: "keg"},
    {words: ["camel", "kennel", "kitten"], correct: "kennel", wordsOnly: true},
    {words: ["cactus", "kitchen", "ketchup"], correct: "ketchup", wordsOnly: true},
    {words: ["Kim", "can", "Ken"], correct: "Ken", wordsOnly: true},
    {words: ["cuddle", "kettle", "candle"], correct: "kettle", wordsOnly: true},
    {words: ["cold", "call", "kelp"], correct: "kelp", wordsOnly: true},
    {words: ["coffee", "Kevin", "cover"], correct: "Kevin", wordsOnly: true}
  ]
});
