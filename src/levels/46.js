import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "46",
  consonant: "g",
  vowel: "u",
  lessonWords: ["gut", "gull", "gumbo"],
  activities: [
    {words: ["game", "gum", "gab"], correctWord: "gum"},
    {words: ["gas", "goose", "gush"], correctWord: "gush", shortInstructions: true},
    {words: ["gun", "goat", "god"], correctWord: "gun", shortInstructions: true},
    {words: ["goblin", "gap", "guppy"], correctWord: "guppy", shortInstructions: true},
    {words: ["gutter", "gate", "giggle"], correctWord: "gutter", shortInstructions: true},
    {words: ["gull", "gallery", "glum"], correctWord: "gull", shortInstructions: true},
    {words: ["gavel", "guzzle", "gosling"], correctWord: "guzzle", shortInstructions: true}
  ]
});
