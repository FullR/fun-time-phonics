import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 44,
  letterIntro: true,
  letter: "g",
  vowel: "a",
  exampleWords: ["gasoline", "gecko", "gift", "goggles", "gum"],
  lessonWords: ["gag", "gallon", "galaxy"],
  activityData: [
    {words: ["gap", "goat", "gift"], correct: "gap"},
    {words: ["goose", "gush", "gas"], correct: "gas", wordsOnly: true},
    {words: ["gum", "grab", "gab"], correct: "gab", wordsOnly: true},
    {words: ["giggles", "goggles", "gag"], correct: "gag", wordsOnly: true},
    {words: ["glasses", "gallop", "gossip"], correct: "gallop", wordsOnly: true},
    {words: ["gavel", "guzzle", "gosling"], correct: "gavel", wordsOnly: true},
    {words: ["gutter", "gallery", "gondola"], correct: "gallery", wordsOnly: true}
  ]
});
