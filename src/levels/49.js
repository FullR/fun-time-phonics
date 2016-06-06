import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "49",
  consonant: "h",
  vowel: "e",
  lessonWords: ["hen", "hello", "headband"],
  activities: [
    {words: ["hen", "hand", "hunt"], correctWord: "hen"},
    {words: ["ham", "head", "hug"], correctWord: "head", shortInstructions: true},
    {words: ["hatch", "hedge", "hinge"], correctWord: "hedge", shortInstructions: true},
    {words: ["hive", "hoof", "heavy"], correctWord: "heavy", shortInstructions: true},
    {words: ["hiker", "hockey", "hexagon"], correctWord: "hexagon", shortInstructions: true},
    {words: ["holly", "helmet", "hammer"], correctWord: "helmet", shortInstructions: true},
    {words: ["helicopter", "holiday", "huckleberry"], correctWord: "helicopter", shortInstructions: true}
  ]
});
