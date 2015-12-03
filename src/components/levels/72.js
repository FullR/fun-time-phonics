import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 72,
  letter: "m",
  vowel: "i",
  lessonWords: ["mint", "mixer", "middle"],
  activityData: [
    {words: ["melt", "mug", "milk"], correct: "milk"},
    {words: ["mix", "Max", "mesh"], correct: "mix", wordsOnly: true},
    {words: ["mat", "mitt", "meat"], correct: "mitt", wordsOnly: true},
    {words: ["mitten", "mantel", "muffin"], correct: "mitten", wordsOnly: true},
    {words: ["model", "middle", "medal"], correct: "middle", wordsOnly: true},
    {words: ["missile", "muscle", "meadow"], correct: "missile", wordsOnly: true},
    {words: ["mustache", "mascot", "miniskirt"], correct: "miniskirt", wordsOnly: true}
  ]
});
