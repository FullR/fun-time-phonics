import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "72",
  consonant: "m",
  vowel: "i",
  lessonWords: ["mint", "mixer", "middle"],
  activities: [
    {words: ["melt", "mug", "milk"], correctWord: "milk"},
    {words: ["mix", "Max", "mesh"], correctWord: "mix", wordsOnly: true},
    {words: ["mat", "mitt", "meat"], correctWord: "mitt", wordsOnly: true},
    {words: ["mitten", "mantel", "muffin"], correctWord: "mitten", wordsOnly: true},
    {words: ["model", "middle", "medal"], correctWord: "middle", wordsOnly: true},
    {words: ["missile", "muscle", "meadow"], correctWord: "missile", wordsOnly: true},
    {words: ["mustache", "mascot", "miniskirt"], correctWord: "miniskirt", wordsOnly: true}
  ]
});
