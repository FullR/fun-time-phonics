import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 74,
  letter: "m",
  vowel: "u",
  lessonWords: ["mug", "mustache", "muzzle"],
  activityData: [
    {words: ["mud", "mad", "maid"], correct: "mud"},
    {words: ["mom", "mummy", "magic"], correct: "mummy", wordsOnly: true},
    {words: ["mug", "mock", "magnet"], correct: "mug", wordsOnly: true},
    {words: ["mitten", "melon", "muffin"], correct: "muffin", wordsOnly: true},
    {words: ["missile", "muscle", "monocle"], correct: "muscle", wordsOnly: true},
    {words: ["mushroom", "mansion", "monitor"], correct: "mushroom", wordsOnly: true},
    {words: ["measure", "monster", "mustard"], correct: "mustard", wordsOnly: true}
  ]
});
