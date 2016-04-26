import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "71",
  consonant: "m",
  vowel: "e",
  lessonWords: ["mesh", "melt", "megaphone"],
  activities: [
    {words: ["men", "man", "moon"], correctWord: "men"},
    {words: ["moth", "mix", "mesh"], correctWord: "mesh", wordsOnly: true},
    {words: ["mitten", "melon", "muffin"], correctWord: "melon", wordsOnly: true},
    {words: ["model", "middle", "medal"], correctWord: "medal", wordsOnly: true},
    {words: ["mixer", "measure", "monster"], correctWord: "measure", wordsOnly: true},
    {words: ["mushroom", "mansion", "meadow"], correctWord: "meadow", wordsOnly: true},
    {words: ["medicine", "mannequin", "minivan"], correctWord: "medicine", wordsOnly: true}
  ]
});
