import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "85",
  consonant: "p",
  vowel: "o",
  lessonWords: ["pod", "pocket", "posse"],
  activities: [
    {words: ["pop", "pipe", "pup"], correctWord: "pop"},
    {words: ["pat", "pot", "pet"], correctWord: "pot", wordsOnly: true},
    {words: ["pigeon", "panda", "poncho"], correctWord: "poncho", wordsOnly: true},
    {words: ["pancake", "popcorn", "pumpkin"], correctWord: "popcorn", wordsOnly: true},
    {words: ["pottery", "patio", "pedestal"], correctWord: "pottery", wordsOnly: true},
    {words: ["pepper", "pimple", "pompom"], correctWord: "pompom", wordsOnly: true},
    {words: ["passenger", "popsicle", "pentagon"], correctWord: "popsicle", wordsOnly: true},
    {words: ["package", "pocket", "puppet"], correctWord: "pocket", wordsOnly: true},
    {words: ["puzzle", "pencil", "possum"], correctWord: "possum", wordsOnly: true}
  ]
});
