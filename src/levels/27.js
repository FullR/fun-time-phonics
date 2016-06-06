import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "27",
  
  consonant: "c",
  vowel: "a",
  letterIntroWords: ["castle", "cop", "cuff"],
  lessonWords: ["cat", "cash", "cabin"],
  activities: [
    {words: ["cap", "cop", "cub"], correctWord: "cap"},
    {words: ["coffee", "calf", "cuff"], correctWord: "calf", shortInstructions: true},
    {words: ["cob", "cab", "crab"], correctWord: "cab", shortInstructions: true},
    {words: ["cotton", "king", "cabin"], correctWord: "cabin", shortInstructions: true},
    {words: ["castle", "collar", "kid"], correctWord: "castle", shortInstructions: true},
    {words: ["comet", "camera", "cupboard"], correctWord: "camera", shortInstructions: true},
    {words: ["cactus", "kick", "costume"], correctWord: "cactus", shortInstructions: true}
  ]
});
