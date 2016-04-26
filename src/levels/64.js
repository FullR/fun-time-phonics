import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "64",
  
  consonant: "l",
  vowel: "a",
  letterIntroWords: ["ladder", "lemon", "little", "lobster", "lumber"],
  lessonWords: ["last", "laptop", "lavender"],
  activities: [
    {words: ["lip", "leap", "lap"], correctWord: "lap"},
    {words: ["left", "lift", "laugh"], correctWord: "laugh", wordsOnly: true},
    {words: ["lunch", "latch", "ledge"], correctWord: "latch", wordsOnly: true},
    {words: ["lasso", "lizard", "lobster"], correctWord: "lasso", wordsOnly: true},
    {words: ["lemon", "lamb", "lime"], correctWord: "lamb", wordsOnly: true},
    {words: ["lamp", "lump", "flap"], correctWord: "lamp", wordsOnly: true},
    {words: ["little", "ladder", "locker"], correctWord: "ladder", wordsOnly: true}
  ]
});
