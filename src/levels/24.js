import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "24",
  consonant: "b",
  vowel: "o",
  lessonWords: ["box", "bottle", "bobcat"],
  activities: [
    {words: ["bud", "bed", "body"], correctWord: "body"},
    {words: ["blocks", "bid", "Bob"], correctWord: "Bob", shortInstructions: true},
    {words: ["boxer", "buckle", "backpack"], correctWord: "boxer", shortInstructions: true},
    {words: ["button", "bottom", "bumper"], correctWord: "bottom", shortInstructions: true},
    {words: ["bell", "battle", "bottle"], correctWord: "bottle", shortInstructions: true},
    {words: ["bonnet", "bunny", "bent"], correctWord: "bonnet", shortInstructions: true},
    {words: ["bun", "bomb", "Ben"], correctWord: "bomb", shortInstructions: true}
  ]
});
