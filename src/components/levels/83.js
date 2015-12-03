import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 83,
  letter: "p",
  vowel: "e",
  lessonWords: ["peg", "pet", "peasant"],
  activityData: [
    {words: ["pan", "pin", "pen"], correct: "pen"},
    {words: ["pedal", "paddle", "poodle"], correct: "pedal", wordsOnly: true},
    {words: ["pickle", "petal", "puddle"], correct: "petal", wordsOnly: true},
    {words: ["penny", "pony", "panda"], correct: "penny", wordsOnly: true},
    {words: ["paper", "pepper", "puppet"], correct: "pepper", wordsOnly: true},
    {words: ["puzzle", "pencil", "possum"], correct: "pencil", wordsOnly: true},
    {words: ["pigeon", "present", "pelican"], correct: "pelican", wordsOnly: true}
  ]
});
