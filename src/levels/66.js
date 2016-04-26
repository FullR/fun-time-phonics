import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "66",
  consonant: "l",
  vowel: "i",
  lessonWords: ["lit", "lily", "liver"],
  activities: [
    {words: ["lid", "lamb", "lot"], correctWord: "lid"},
    {words: ["lock", "lake", "lick"], correctWord: "lick", wordsOnly: true},
    {words: ["little", "letter", "lumber"], correctWord: "little", wordsOnly: true},
    {words: ["lemon", "limo", "lobby"], correctWord: "limo", wordsOnly: true},
    {words: ["left", "lift", "laugh"], correctWord: "lift", wordsOnly: true},
    {words: ["lizard", "lasso", "lobster"], correctWord: "lizard", wordsOnly: true},
    {words: ["luggage", "lettuce", "licorice"], correctWord: "licorice", wordsOnly: true}
  ]
});
