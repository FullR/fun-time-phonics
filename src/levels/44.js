import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "44",
  
  consonant: "g",
  vowel: "a",
  letterIntroWords: ["gasoline", "gecko", "gift", "goggles", "gum"],
  lessonWords: ["gag", "gallon", "galaxy"],
  activities: [
    {words: ["gap", "goat", "gift"], correctWord: "gap"},
    {words: ["goose", "gush", "gas"], correctWord: "gas", wordsOnly: true},
    {words: ["gum", "grab", "gab"], correctWord: "gab", wordsOnly: true},
    {words: ["giggle", "goggles", "gag"], correctWord: "gag", wordsOnly: true},
    {words: ["glasses", "gallop", "gossip"], correctWord: "gallop", wordsOnly: true},
    {words: ["gavel", "guzzle", "gosling"], correctWord: "gavel", wordsOnly: true},
    {words: ["gutter", "gallery", "gondola"], correctWord: "gallery", wordsOnly: true}
  ]
});
