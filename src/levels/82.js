import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({

  letterIntroWords: ["package", "pencil", "pickle", "pocket", "pumpkin"],
  id: "82",
  consonant: "p",
  vowel: "a",
  lessonWords: ["pat", "pack", "pacifier"],
  activities: [
    {words: ["peach", "path", "pitch"], correctWord: "path"},
    {words: ["pedal", "puddle", "paddle"], correctWord: "paddle", shortInstructions: true},
    {words: ["pillow", "palace", "plaza"], correctWord: "palace", shortInstructions: true},
    {words: ["package", "pocket", "picnic"], correctWord: "package", shortInstructions: true},
    {words: ["poncho", "penny", "patch"], correctWord: "panda", shortInstructions: true},
    {words: ["pottery", "patio", "pentagon"], correctWord: "patio", shortInstructions: true},
    {words: ["passenger", "popsicle", "pedestal"], correctWord: "passenger", shortInstructions: true}
  ]
});
