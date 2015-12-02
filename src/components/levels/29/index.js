import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  title: "Consonant 'c' Short Vowel Sound 'u'",
  number: 29,
  activityCount: 7,
  letter: "c",
  vowel: "u",
  lessonWords: ["cut", "cuddle", "cupcake"],
  activityData: [
    {words: ["cup", "cop", "cape"], correct: "cup"},
    {words: ["calf", "cuff", "coffee"], correct: "cuff", wordsOnly: true},
    {words: ["club", "cab", "cub"], correct: "cub", wordsOnly: true},
    {words: ["castle", "costume", "customer"], correct: "customer", wordsOnly: true},
    {words: ["cotton", "cutout", "kite"], correct: "cutout", wordsOnly: true},
    {words: ["cuddle", "kettle", "candle"], correct: "cuddle", wordsOnly: true},
    {words: ["camera", "copper", "cupboard"], correct: "cupboard", wordsOnly: true}
  ]
});
