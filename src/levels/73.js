import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "73",
  consonant: "m",
  vowel: "o",
  lessonWords: ["mom", "mock", "monitor"],
  activities: [
    {words: ["map", "mop", "mud"], correctWord: "mop"},
    {words: ["model", "medal", "maple"], correctWord: "model", shortInstructions: true},
    {words: ["maid", "mad", "mob"], correctWord: "mob", shortInstructions: true},
    {words: ["mantel", "muscle", "monocle"], correctWord: "monocle", shortInstructions: true},
    {words: ["mixer", "monster", "mustard"], correctWord: "monster", shortInstructions: true},
    {words: ["mummy", "mongoose", "magazine"], correctWord: "mongoose", shortInstructions: true},
    {words: ["monitor", "mannequin", "minivan"], correctWord: "monitor", shortInstructions: true}
  ]
});
