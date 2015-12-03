import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 73,
  letter: "m",
  vowel: "o",
  lessonWords: ["mom", "mock", "monitor"],
  activityData: [
    {words: ["map", "mop", "mud"], correct: "mop"},
    {words: ["model", "medal", "maple"], correct: "model", wordsOnly: true},
    {words: ["maid", "mad", "mob"], correct: "mob", wordsOnly: true},
    {words: ["mantel", "muscle", "monocle"], correct: "monocle", wordsOnly: true},
    {words: ["mixer", "monster", "mustard"], correct: "monster", wordsOnly: true},
    {words: ["mummy", "mongoose", "magazine"], correct: "mongoose", wordsOnly: true},
    {words: ["monitor", "mannequin", "minivan"], correct: "monitor", wordsOnly: true}
  ]
});
