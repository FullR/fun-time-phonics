import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "45",
  consonant: "g",
  vowel: "o",
  lessonWords: ["god", "gobble", "goggles"],
  activities: [
    {words: ["geese", "gallop", "gossip"], correctWord: "gossip"},
    {words: ["giggle", "goggles", "gag"], correctWord: "goggles", shortInstructions: true},
    {words: ["goblet", "guest", "ghost"], correctWord: "goblet", shortInstructions: true},
    {words: ["gate", "god", "gift"], correctWord: "god", shortInstructions: true},
    {words: ["guzzle", "gosling", "glasses"], correctWord: "gosling", shortInstructions: true},
    {words: ["goblin", "globe", "guppy"], correctWord: "goblin", shortInstructions: true},
    {words: ["gutter", "gallery", "gondola"], correctWord: "gondola", shortInstructions: true},
  ]
});
