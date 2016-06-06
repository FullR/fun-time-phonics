import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "64",
  
  consonant: "l",
  vowel: "a",
  letterIntroWords: ["ladder", "lemon", "little", "lobster", "lumber"],
  lessonWords: ["last", "laptop", "lavender"],
  activities: [
    {words: ["lip", "leap", "lap"], correctWord: "lap"},
    {words: ["left", "lift", "laugh"], correctWord: "laugh", shortInstructions: true},
    {words: ["lunch", "latch", "ledge"], correctWord: "latch", shortInstructions: true},
    {words: ["lasso", "lizard", "lobster"], correctWord: "lasso", shortInstructions: true},
    {words: ["lemon", "lamb", "lime"], correctWord: "lamb", shortInstructions: true},
    {words: ["lamp", "lump", "flap"], correctWord: "lamp", shortInstructions: true},
    {words: ["little", "ladder", "locker"], correctWord: "ladder", shortInstructions: true}
  ]
});
