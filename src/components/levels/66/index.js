import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 66,
  letter: "l",
  vowel: "i",
  lessonWords: ["lit", "lily", "liver"],
  activityData: [
    {words: ["lid", "lamb", "lot"], correct: "lid"},
    {words: ["lock", "lake", "lick"], correct: "lick", wordsOnly: true},
    {words: ["little", "letter", "lumber"], correct: "little", wordsOnly: true},
    {words: ["lemon", "limo", "lobby"], correct: "limo", wordsOnly: true},
    {words: ["left", "lift", "laugh"], correct: "lift", wordsOnly: true},
    {words: ["lizard", "lasso", "lobster"], correct: "lizard", wordsOnly: true},
    {words: ["luggage", "lettuce", "licorice"], correct: "licorice", wordsOnly: true}
  ]
});
