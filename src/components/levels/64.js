import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 64,
  letterIntro: true,
  letter: "l",
  vowel: "a",
  exampleWords: ["ladder", "lemon", "little", "lobster", "lumber"],
  lessonWords: ["last", "laptop", "lavender"],
  activityData: [
    {words: ["lip", "leap", "lap"], correct: "lap"},
    {words: ["left", "lift", "laugh"], correct: "laugh", wordsOnly: true},
    {words: ["lunch", "latch", "ledge"], correct: "latch", wordsOnly: true},
    {words: ["lasso", "lizard", "lobster"], correct: "lasso", wordsOnly: true},
    {words: ["lemon", "lamb", "lime"], correct: "lamb", wordsOnly: true},
    {words: ["lamp", "lump", "flap"], correct: "lamp", wordsOnly: true},
    {words: ["little", "ladder", "locker"], correct: "ladder", wordsOnly: true}
  ]
});
