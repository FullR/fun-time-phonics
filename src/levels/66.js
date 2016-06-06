import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "66",
  consonant: "l",
  vowel: "i",
  lessonWords: ["lit", "lily", "liver"],
  activities: [
    {words: ["lid", "lamb", "lot"], correctWord: "lid"},
    {words: ["lock", "lake", "lick"], correctWord: "lick", shortInstructions: true},
    {words: ["little", "letter", "lumber"], correctWord: "little", shortInstructions: true},
    {words: ["lemon", "limo", "lobby"], correctWord: "limo", shortInstructions: true},
    {words: ["left", "lift", "laugh"], correctWord: "lift", shortInstructions: true},
    {words: ["lizard", "lasso", "lobster"], correctWord: "lizard", shortInstructions: true},
    {words: ["luggage", "lettuce", "licorice"], correctWord: "licorice", shortInstructions: true}
  ]
});
