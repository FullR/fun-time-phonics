import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "67",
  consonant: "l",
  vowel: "o",
  lessonWords: ["lot", "lobby", "locket"],
  activities: [
    {words: ["lock", "lake", "lick"], correctWord: "lock"},
    {words: ["laptop", "lollipop", "lullaby"], correctWord: "lollipop", shortInstructions: true},
    {words: ["lid", "flip", "lot"], correctWord: "lot", shortInstructions: true},
    {words: ["lunch", "ledge", "lodge"], correctWord: "lodge", shortInstructions: true},
    {words: ["lasso", "lobster", "lumber"], correctWord: "lobster", shortInstructions: true},
    {words: ["clock", "locker", "ladder"], correctWord: "locker", shortInstructions: true},
    {words: ["lemon", "limo", "lobby"], correctWord: "lobby", shortInstructions: true}
  ]
});
