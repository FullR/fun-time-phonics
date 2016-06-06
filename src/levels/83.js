import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "83",
  consonant: "p",
  vowel: "e",
  lessonWords: ["peg", "pet", "peasant"],
  activities: [
    {words: ["pan", "pin", "pen"], correctWord: "pen"},
    {words: ["pedal", "paddle", "poodle"], correctWord: "pedal", shortInstructions: true},
    {words: ["pickle", "petal", "puddle"], correctWord: "petal", shortInstructions: true},
    {words: ["penny", "pony", "panda"], correctWord: "penny", shortInstructions: true},
    {words: ["paper", "pepper", "puppet"], correctWord: "pepper", shortInstructions: true},
    {words: ["puzzle", "pencil", "possum"], correctWord: "pencil", shortInstructions: true},
    {words: ["pigeon", "present", "pelican"], correctWord: "pelican", shortInstructions: true}
  ]
});
