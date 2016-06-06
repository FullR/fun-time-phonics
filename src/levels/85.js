import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "85",
  consonant: "p",
  vowel: "o",
  lessonWords: ["pod", "pocket", "posse"],
  activities: [
    {words: ["pop", "pipe", "pup"], correctWord: "pop"},
    {words: ["pat", "pot", "pet"], correctWord: "pot", shortInstructions: true},
    {words: ["pigeon", "panda", "poncho"], correctWord: "poncho", shortInstructions: true},
    {words: ["pancake", "popcorn", "pumpkin"], correctWord: "popcorn", shortInstructions: true},
    {words: ["pottery", "patio", "pedestal"], correctWord: "pottery", shortInstructions: true},
    {words: ["pepper", "pimple", "pompom"], correctWord: "pompom", shortInstructions: true},
    {words: ["passenger", "popsicle", "pentagon"], correctWord: "popsicle", shortInstructions: true},
    {words: ["package", "pocket", "puppet"], correctWord: "pocket", shortInstructions: true},
    {words: ["puzzle", "pencil", "possum"], correctWord: "possum", shortInstructions: true}
  ]
});
