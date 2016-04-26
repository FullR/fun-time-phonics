import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "51",
  consonant: "h",
  vowel: "o",
  lessonWords: ["hop", "hockey", "hollow"],
  activities: [
    {words: ["hit", "hot", "heart"], correctWord: "hot"},
    {words: ["handcuffs", "hubcap", "hopscotch"], correctWord: "hopscotch", wordsOnly: true},
    {words: ["holly", "hilly", "helmet"], correctWord: "holly", wordsOnly: true},
    {words: ["hiker", "hockey", "hippo"], correctWord: "hockey", wordsOnly: true},
    {words: ["hospital", "hexagon", "hammer"], correctWord: "hospital", wordsOnly: true},
    {words: ["huckleberry", "hamburger", "hotdog"], correctWord: "hotdog", wordsOnly: true},
    {words: ["helicopter", "holiday", "hundred"], correctWord: "holiday", wordsOnly: true}
  ]
});
