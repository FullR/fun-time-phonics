import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "72",
  consonant: "m",
  vowel: "i",
  lessonWords: ["mint", "mixer", "middle"],
  activities: [
    {words: ["melt", "mug", "milk"], correctWord: "milk"},
    {words: ["mix", "Max", "mesh"], correctWord: "mix", shortInstructions: true},
    {words: ["mat", "mitt", "meat"], correctWord: "mitt", shortInstructions: true},
    {words: ["mitten", "mantel", "muffin"], correctWord: "mitten", shortInstructions: true},
    {words: ["model", "middle", "medal"], correctWord: "middle", shortInstructions: true},
    {words: ["missile", "muscle", "meadow"], correctWord: "missile", shortInstructions: true},
    {words: ["mustache", "mascot", "miniskirt"], correctWord: "miniskirt", shortInstructions: true}
  ]
});
