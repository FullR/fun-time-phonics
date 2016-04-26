import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "73",
  consonant: "m",
  vowel: "o",
  lessonWords: ["mom", "mock", "monitor"],
  activities: [
    {words: ["map", "mop", "mud"], correctWord: "mop"},
    {words: ["model", "medal", "maple"], correctWord: "model", wordsOnly: true},
    {words: ["maid", "mad", "mob"], correctWord: "mob", wordsOnly: true},
    {words: ["mantel", "muscle", "monocle"], correctWord: "monocle", wordsOnly: true},
    {words: ["mixer", "monster", "mustard"], correctWord: "monster", wordsOnly: true},
    {words: ["mummy", "mongoose", "magazine"], correctWord: "mongoose", wordsOnly: true},
    {words: ["monitor", "mannequin", "minivan"], correctWord: "monitor", wordsOnly: true}
  ]
});
