import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "27",
  
  consonant: "c",
  vowel: "a",
  letterIntroWords: ["castle", "cop", "cuff"],
  lessonWords: ["cat", "cash", "cabin"],
  activities: [
    {words: ["cap", "cop", "cub"], correctWord: "cap"},
    {words: ["coffee", "calf", "cuff"], correctWord: "calf", wordsOnly: true},
    {words: ["cob", "cab", "crab"], correctWord: "cab", wordsOnly: true},
    {words: ["cotton", "king", "cabin"], correctWord: "cabin", wordsOnly: true},
    {words: ["castle", "collar", "kid"], correctWord: "castle", wordsOnly: true},
    {words: ["comet", "camera", "cupboard"], correctWord: "camera", wordsOnly: true},
    {words: ["cactus", "kick", "costume"], correctWord: "cactus", wordsOnly: true}
  ]
});
