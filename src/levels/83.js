import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "83",
  consonant: "p",
  vowel: "e",
  lessonWords: ["peg", "pet", "peasant"],
  activities: [
    {words: ["pan", "pin", "pen"], correctWord: "pen"},
    {words: ["pedal", "paddle", "poodle"], correctWord: "pedal", wordsOnly: true},
    {words: ["pickle", "petal", "puddle"], correctWord: "petal", wordsOnly: true},
    {words: ["penny", "pony", "panda"], correctWord: "penny", wordsOnly: true},
    {words: ["paper", "pepper", "puppet"], correctWord: "pepper", wordsOnly: true},
    {words: ["puzzle", "pencil", "possum"], correctWord: "pencil", wordsOnly: true},
    {words: ["pigeon", "present", "pelican"], correctWord: "pelican", wordsOnly: true}
  ]
});
