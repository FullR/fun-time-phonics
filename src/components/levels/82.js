import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  letterIntro: true,
  exampleWords: ["package", "pencil", "pickle", "pocket", "pumpkin"],
  number: 82,
  letter: "p",
  vowel: "a",
  lessonWords: ["pat", "pack", "pacifier"],
  activityData: [
    {words: ["peach", "path", "pitch"], correct: "path"},
    {words: ["pedal", "puddle", "paddle"], correct: "paddle", wordsOnly: true},
    {words: ["pillow", "palace", "plaza"], correct: "palace", wordsOnly: true},
    {words: ["package", "pocket", "picnic"], correct: "package", wordsOnly: true},
    {words: ["poncho", "penny", "panda"], correct: "panda", wordsOnly: true},
    {words: ["pottery", "patio", "pentagon"], correct: "patio", wordsOnly: true},
    {words: ["passenger", "popsicle", "pedestal"], correct: "passenger", wordsOnly: true}
  ]
});
