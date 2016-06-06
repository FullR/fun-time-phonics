import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "29",
  consonant: "c",
  vowel: "u",
  lessonWords: ["cut", "cuddle", "cupcake"],
  activities: [
    {words: ["cup", "cop", "cape"], correctWord: "cup"},
    {words: ["calf", "cuff", "coffee"], correctWord: "cuff", shortInstructions: true},
    {words: ["club", "cab", "cub"], correctWord: "cub", shortInstructions: true},
    {words: ["castle", "costume", "customer"], correctWord: "customer", shortInstructions: true},
    {words: ["cotton", "cutout", "kite"], correctWord: "cutout", shortInstructions: true},
    {words: ["cuddle", "kettle", "candle"], correctWord: "cuddle", shortInstructions: true},
    {words: ["camera", "copper", "cupboard"], correctWord: "cupboard", shortInstructions: true}
  ]
});
