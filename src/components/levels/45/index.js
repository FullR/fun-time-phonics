import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 45,
  letter: "g",
  vowel: "o",
  lessonWords: ["god", "gobble", "goggles"],
  activityData: [
    {words: ["geese", "gallop", "gossip"], correct: "gossip"},
    {words: ["giggle", "goggles", "gag"], correct: "goggles", wordsOnly: true},
    {words: ["goblet", "guest", "ghost"], correct: "goblet", wordsOnly: true},
    {words: ["gate", "god", "gift"], correct: "god", wordsOnly: true},
    {words: ["guzzle", "gosling", "glasses"], correct: "gosling", wordsOnly: true},
    {words: ["goblin", "globe", "guppy"], correct: "goblin", wordsOnly: true},
    {words: ["gutter", "gallery", "gondola"], correct: "gondola", wordsOnly: true},
  ]
});
