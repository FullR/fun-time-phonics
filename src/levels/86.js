import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "86",
  consonant: "p",
  vowel: "u",
  lessonWords: ["puck", "putt", "puffin"],
  activities: [
    {words: ["peg", "pig", "pug"], correctWord: "pug"},
    {words: ["punch", "peach", "pitch"], correctWord: "punch", shortInstructions: true},
    {words: ["poodle", "puddle", "paddle"], correctWord: "puddle", shortInstructions: true},
    {words: ["popcorn", "pumpkin", "penguin"], correctWord: "pumpkin", shortInstructions: true},
    {words: ["paper", "penny", "puppy"], correctWord: "puppy", shortInstructions: true},
    {words: ["puzzle", "pencil", "plaza"], correctWord: "puzzle", shortInstructions: true},
    {words: ["pepper", "pocket", "puppet"], correctWord: "puppet", shortInstructions: true}
  ]
});
