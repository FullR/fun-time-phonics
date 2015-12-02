import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 51,
  letter: "h",
  vowel: "o",
  lessonWords: ["hop", "hocket", "hollow"],
  activityData: [
    {words: ["hit", "hot", "heart"], correct: "hot"},
    {words: ["handcuffs", "hubcap", "hopscotch"], correct: "hopscotch", wordsOnly: true},
    {words: ["holly", "hilly", "helmet"], correct: "holly", wordsOnly: true},
    {words: ["hiker", "hockey", "hippo"], correct: "hockey", wordsOnly: true},
    {words: ["hospital", "hexagon", "hammer"], correct: "hospital", wordsOnly: true},
    {words: ["huckleberry", "hamburger", "hotdog"], correct: "hotdog", wordsOnly: true},
    {words: ["helicopter", "holiday", "hundred"], correct: "holiday", wordsOnly: true}
  ]
});
