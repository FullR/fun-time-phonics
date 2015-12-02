import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 27,
  letterIntro: true,
  letter: "c",
  vowel: "a",
  exampleWords: ["castle", "cop", "cuff"],
  lessonWords: ["cat", "cash", "cabin"],
  activityData: [
    {words: ["cap", "cop", "cub"], correct: "cap"},
    {words: ["coffee", "calf", "cuff"], correct: "calf", wordsOnly: true},
    {words: ["cob", "cab", "crab"], correct: "cab", wordsOnly: true},
    {words: ["cotton", "king", "cabin"], correct: "cabin", wordsOnly: true},
    {words: ["castle", "collar", "kid"], correct: "castle", wordsOnly: true},
    {words: ["comet", "camera", "cupboard"], correct: "camera", wordsOnly: true},
    {words: ["cactus", "kick", "costume"], correct: "cactus", wordsOnly: true}
  ]
});
