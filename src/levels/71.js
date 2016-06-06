import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "71",
  consonant: "m",
  vowel: "e",
  lessonWords: ["mesh", "melt", "megaphone"],
  activities: [
    {words: ["men", "man", "moon"], correctWord: "men"},
    {words: ["moth", "mix", "mesh"], correctWord: "mesh", shortInstructions: true},
    {words: ["mitten", "melon", "muffin"], correctWord: "melon", shortInstructions: true},
    {words: ["model", "middle", "medal"], correctWord: "medal", shortInstructions: true},
    {words: ["mixer", "measure", "monster"], correctWord: "measure", shortInstructions: true},
    {words: ["mushroom", "mansion", "meadow"], correctWord: "meadow", shortInstructions: true},
    {words: ["medicine", "mannequin", "minivan"], correctWord: "medicine", shortInstructions: true}
  ]
});
