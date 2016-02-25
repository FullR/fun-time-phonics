import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 24,
  letter: "b",
  vowel: "o",
  lessonWords: ["box", "bottle", "bobcat"],
  activityData: [
    {words: ["bud", "bed", "body"], correct: "body"},
    {words: ["blocks", "bid", "Bob"], correct: "Bob", wordsOnly: true},
    {words: ["boxer", "buckle", "backpack"], correct: "boxer", wordsOnly: true},
    {words: ["button", "bottom", "bumper"], correct: "bottom", wordsOnly: true},
    {words: ["bell", "battle", "bottle"], correct: "bottle", wordsOnly: true},
    {words: ["bonnet", "bunny", "bent"], correct: "bonnet", wordsOnly: true},
    {words: ["bun", "bomb", "Ben"], correct: "bomb", wordsOnly: true}
  ]
});
