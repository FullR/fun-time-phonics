import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "74",
  consonant: "m",
  vowel: "u",
  lessonWords: ["mug", "mustache", "muzzle"],
  activities: [
    {words: ["mud", "mad", "maid"], correctWord: "mud"},
    {words: ["mom", "mummy", "magic"], correctWord: "mummy", shortInstructions: true},
    {words: ["mug", "mock", "magnet"], correctWord: "mug", shortInstructions: true},
    {words: ["mitten", "melon", "muffin"], correctWord: "muffin", shortInstructions: true},
    {words: ["missile", "muscle", "monocle"], correctWord: "muscle", shortInstructions: true},
    {words: ["mushroom", "mansion", "monitor"], correctWord: "mushroom", shortInstructions: true},
    {words: ["measure", "monster", "mustard"], correctWord: "mustard", shortInstructions: true}
  ]
});
