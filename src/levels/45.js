import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "45",
  consonant: "g",
  vowel: "o",
  lessonWords: ["god", "gobble", "goggles"],
  activities: [
    {words: ["geese", "gallop", "gossip"], correctWord: "gossip"},
    {words: ["giggle", "goggles", "gag"], correctWord: "goggles", wordsOnly: true},
    {words: ["goblet", "guest", "ghost"], correctWord: "goblet", wordsOnly: true},
    {words: ["gate", "god", "gift"], correctWord: "god", wordsOnly: true},
    {words: ["guzzle", "gosling", "glasses"], correctWord: "gosling", wordsOnly: true},
    {words: ["goblin", "globe", "guppy"], correctWord: "goblin", wordsOnly: true},
    {words: ["gutter", "gallery", "gondola"], correctWord: "gondola", wordsOnly: true},
  ]
});
