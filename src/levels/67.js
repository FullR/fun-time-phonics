import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "67",
  consonant: "l",
  vowel: "o",
  lessonWords: ["lot", "lobby", "locket"],
  activities: [
    {words: ["lock", "lake", "lick"], correctWord: "lock"},
    {words: ["laptop", "lollipop", "lullaby"], correctWord: "lollipop", wordsOnly: true},
    {words: ["lid", "flip", "lot"], correctWord: "lot", wordsOnly: true},
    {words: ["lunch", "ledge", "lodge"], correctWord: "lodge", wordsOnly: true},
    {words: ["lasso", "lobster", "lumber"], correctWord: "lobster", wordsOnly: true},
    {words: ["clock", "locker", "ladder"], correctWord: "locker", wordsOnly: true},
    {words: ["lemon", "limo", "lobby"], correctWord: "lobby", wordsOnly: true}
  ]
});
