import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 67,
  letter: "l",
  vowel: "o",
  lessonWords: ["lot", "lobby", "locket"],
  activityData: [
    {words: ["lock", "lake", "lick"], correct: "lock"},
    {words: ["laptop", "lollipop", "lullaby"], correct: "lollipop", wordsOnly: true},
    {words: ["lid", "flip", "lot"], correct: "lot", wordsOnly: true},
    {words: ["lunch", "ledge", "lodge"], correct: "lodge", wordsOnly: true},
    {words: ["lasso", "lobster", "lumber"], correct: "lobster", wordsOnly: true},
    {words: ["clock", "locker", "ladder"], correct: "locker", wordsOnly: true},
    {words: ["lemon", "limo", "lobby"], correct: "lobby", wordsOnly: true}
  ]
});
