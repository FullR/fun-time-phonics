import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "46",
  consonant: "g",
  vowel: "u",
  lessonWords: ["gut", "gull", "gumbo"],
  activities: [
    {words: ["game", "gum", "gab"], correctWord: "gum"},
    {words: ["gas", "goose", "gush"], correctWord: "gush", wordsOnly: true},
    {words: ["gun", "goat", "god"], correctWord: "gun", wordsOnly: true},
    {words: ["goblin", "gap", "guppy"], correctWord: "guppy", wordsOnly: true},
    {words: ["gutter", "gate", "giggle"], correctWord: "gutter", wordsOnly: true},
    {words: ["gull", "gallery", "glum"], correctWord: "gull", wordsOnly: true},
    {words: ["gavel", "guzzle", "gosling"], correctWord: "guzzle", wordsOnly: true}
  ]
});
