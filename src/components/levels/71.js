import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 71,
  letter: "m",
  vowel: "e",
  lessonWords: ["mesh", "melt", "megaphone"],
  activityData: [
    {words: ["men", "man", "moon"], correct: "men"},
    {words: ["moth", "mix", "mesh"], correct: "mesh", wordsOnly: true},
    {words: ["mitten", "melon", "muffin"], correct: "melon", wordsOnly: true},
    {words: ["model", "middle", "medal"], correct: "medal", wordsOnly: true},
    {words: ["mixer", "measure", "monster"], correct: "measure", wordsOnly: true},
    {words: ["mushroom", "mansion", "meadow"], correct: "meadow", wordsOnly: true},
    {words: ["medicine", "mannequin", "minivan"], correct: "medicine", wordsOnly: true}
  ]
});
