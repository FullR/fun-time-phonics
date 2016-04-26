import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "49",
  consonant: "h",
  vowel: "e",
  lessonWords: ["hen", "hello", "headband"],
  activities: [
    {words: ["hen", "hand", "hunt"], correctWord: "hen"},
    {words: ["ham", "head", "hug"], correctWord: "head", wordsOnly: true},
    {words: ["hatch", "hedge", "hinge"], correctWord: "hedge", wordsOnly: true},
    {words: ["hive", "hoof", "heavy"], correctWord: "heavy", wordsOnly: true},
    {words: ["hiker", "hockey", "hexagon"], correctWord: "hexagon", wordsOnly: true},
    {words: ["holly", "helmet", "hammer"], correctWord: "helmet", wordsOnly: true},
    {words: ["helicopter", "holiday", "huckleberry"], correctWord: "helicopter", wordsOnly: true}
  ]
});
