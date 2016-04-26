import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "48",
  consonant: "h",
  vowel: "a",
  letterIntroWords: ["hat", "hen", "hit", "hop", "hug"],
  lessonWords: ["half", "halibut", "hatchback"],
  activities: [
    {words: ["hit", "hot", "hat"], correctWord: "hat"},
    {words: ["hatch", "hitch", "hut"], correctWord: "hatch", wordsOnly: true},
    {words: ["hippo", "happy", "hump"], correctWord: "happy", wordsOnly: true},
    {words: ["hive", "half", "hoof"], correctWord: "half", wordsOnly: true},
    {words: ["hatchet", "hotdog", "hexagon"], correctWord: "hatchet", wordsOnly: true},
    {words: ["holly", "helmet", "hammer"], correctWord: "hammer", wordsOnly: true},
    {words: ["handle", "huddle", "hidden"], correctWord: "handle", wordsOnly: true}
  ]
});
