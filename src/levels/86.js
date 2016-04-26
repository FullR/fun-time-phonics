import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "86",
  consonant: "p",
  vowel: "u",
  lessonWords: ["puck", "putt", "puffin"],
  activities: [
    {words: ["peg", "pig", "pug"], correctWord: "pug"},
    {words: ["punch", "peach", "pitch"], correctWord: "punch", wordsOnly: true},
    {words: ["poodle", "puddle", "paddle"], correctWord: "puddle", wordsOnly: true},
    {words: ["popcorn", "pumpkin", "penguin"], correctWord: "pumpkin", wordsOnly: true},
    {words: ["paper", "penny", "puppy"], correctWord: "puppy", wordsOnly: true},
    {words: ["puzzle", "pencil", "plaza"], correctWord: "puzzle", wordsOnly: true},
    {words: ["pepper", "pocket", "puppet"], correctWord: "puppet", wordsOnly: true}
  ]
});
