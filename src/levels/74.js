import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "74",
  consonant: "m",
  vowel: "u",
  lessonWords: ["mug", "mustache", "muzzle"],
  activities: [
    {words: ["mud", "mad", "maid"], correctWord: "mud"},
    {words: ["mom", "mummy", "magic"], correctWord: "mummy", wordsOnly: true},
    {words: ["mug", "mock", "magnet"], correctWord: "mug", wordsOnly: true},
    {words: ["mitten", "melon", "muffin"], correctWord: "muffin", wordsOnly: true},
    {words: ["missile", "muscle", "monocle"], correctWord: "muscle", wordsOnly: true},
    {words: ["mushroom", "mansion", "monitor"], correctWord: "mushroom", wordsOnly: true},
    {words: ["measure", "monster", "mustard"], correctWord: "mustard", wordsOnly: true}
  ]
});
