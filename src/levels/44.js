import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "44",
  
  consonant: "g",
  vowel: "a",
  letterIntroWords: ["gasoline", "gecko", "gift", "goggles", "gum"],
  lessonWords: ["gag", "gallon", "galaxy"],
  activities: [
    {words: ["gap", "goat", "gift"], correctWord: "gap"},
    {words: ["goose", "gush", "gas"], correctWord: "gas", shortInstructions: true},
    {words: ["gum", "grab", "gab"], correctWord: "gab", shortInstructions: true},
    {words: ["giggle", "goggles", "gag"], correctWord: "gag", shortInstructions: true},
    {words: ["glasses", "gallop", "gossip"], correctWord: "gallop", shortInstructions: true},
    {words: ["gavel", "guzzle", "gosling"], correctWord: "gavel", shortInstructions: true},
    {words: ["gutter", "gallery", "gondola"], correctWord: "gallery", shortInstructions: true}
  ]
});
