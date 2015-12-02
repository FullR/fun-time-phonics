import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 49,
  letter: "h",
  vowel: "e",
  lessonWords: ["hen", "hello", "headband"],
  activityData: [
    {words: ["hen", "hand", "hunt"], correct: "hen"},
    {words: ["ham", "head", "hug"], correct: "head", wordsOnly: true},
    {words: ["hatch", "hedge", "hinge"], correct: "hedge", wordsOnly: true},
    {words: ["hive", "hoof", "heavy"], correct: "heavy", wordsOnly: true},
    {words: ["hiker", "hockey", "hexagon"], correct: "hexagon", wordsOnly: true},
    {words: ["holly", "helmet", "hammer"], correct: "helmet", wordsOnly: true},
    {words: ["helicopter", "holiday", "huckleberry"], correct: "helicopter", wordsOnly: true}
  ]
});
