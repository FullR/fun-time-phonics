import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "24",
  consonant: "b",
  vowel: "o",
  lessonWords: ["box", "bottle", "bobcat"],
  activities: [
    {words: ["bud", "bed", "body"], correctWord: "body"},
    {words: ["blocks", "bid", "Bob"], correctWord: "Bob", wordsOnly: true},
    {words: ["boxer", "buckle", "backpack"], correctWord: "boxer", wordsOnly: true},
    {words: ["button", "bottom", "bumper"], correctWord: "bottom", wordsOnly: true},
    {words: ["bell", "battle", "bottle"], correctWord: "bottle", wordsOnly: true},
    {words: ["bonnet", "bunny", "bent"], correctWord: "bonnet", wordsOnly: true},
    {words: ["bun", "bomb", "Ben"], correctWord: "bomb", wordsOnly: true}
  ]
});
