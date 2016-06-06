import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "51",
  consonant: "h",
  vowel: "o",
  lessonWords: ["hop", "hockey", "hollow"],
  activities: [
    {words: ["hit", "hot", "heart"], correctWord: "hot"},
    {words: ["handcuffs", "hubcap", "hopscotch"], correctWord: "hopscotch", shortInstructions: true},
    {words: ["holly", "hilly", "helmet"], correctWord: "holly", shortInstructions: true},
    {words: ["hiker", "hockey", "hippo"], correctWord: "hockey", shortInstructions: true},
    {words: ["hospital", "hexagon", "hammer"], correctWord: "hospital", shortInstructions: true},
    {words: ["huckleberry", "hamburger", "hotdog"], correctWord: "hotdog", shortInstructions: true},
    {words: ["helicopter", "holiday", "hundred"], correctWord: "holiday", shortInstructions: true}
  ]
});
