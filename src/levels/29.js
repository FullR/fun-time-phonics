import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "29",
  consonant: "c",
  vowel: "u",
  lessonWords: ["cut", "cuddle", "cupcake"],
  activities: [
    {words: ["cup", "cop", "cape"], correctWord: "cup"},
    {words: ["calf", "cuff", "coffee"], correctWord: "cuff", wordsOnly: true},
    {words: ["club", "cab", "cub"], correctWord: "cub", wordsOnly: true},
    {words: ["castle", "costume", "customer"], correctWord: "customer", wordsOnly: true},
    {words: ["cotton", "cutout", "kite"], correctWord: "cutout", wordsOnly: true},
    {words: ["cuddle", "kettle", "candle"], correctWord: "cuddle", wordsOnly: true},
    {words: ["camera", "copper", "cupboard"], correctWord: "cupboard", wordsOnly: true}
  ]
});
