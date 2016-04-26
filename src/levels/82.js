import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["package", "pencil", "pickle", "pocket", "pumpkin"],
  id: "82",
  consonant: "p",
  vowel: "a",
  lessonWords: ["pat", "pack", "pacifier"],
  activities: [
    {words: ["peach", "path", "pitch"], correctWord: "path"},
    {words: ["pedal", "puddle", "paddle"], correctWord: "paddle", wordsOnly: true},
    {words: ["pillow", "palace", "plaza"], correctWord: "palace", wordsOnly: true},
    {words: ["package", "pocket", "picnic"], correctWord: "package", wordsOnly: true},
    {words: ["poncho", "penny", "panda"], correctWord: "panda", wordsOnly: true},
    {words: ["pottery", "patio", "pentagon"], correctWord: "patio", wordsOnly: true},
    {words: ["passenger", "popsicle", "pedestal"], correctWord: "passenger", wordsOnly: true}
  ]
});
