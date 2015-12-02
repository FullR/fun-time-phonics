import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 48,
  letterIntro: true,
  letter: "h",
  vowel: "a",
  exampleWords: ["hat", "hen", "hit", "hop", "hug"],
  lessonWords: ["half", "halibut", "hatchback"],
  activityData: [
    {words: ["hit", "hot", "hat"], correct: "hat"},
    {words: ["hatch", "hitch", "hut"], correct: "hatch", wordsOnly: true},
    {words: ["hippo", "happy", "hump"], correct: "happy", wordsOnly: true},
    {words: ["hive", "half", "hoof"], correct: "half", wordsOnly: true},
    {words: ["hatchet", "hotdog", "hexagon"], correct: "hatchet", wordsOnly: true},
    {words: ["holly", "helmet", "hammer"], correct: "hammer", wordsOnly: true},
    {words: ["handle", "huddle", "hidden"], correct: "handle", wordsOnly: true}
  ]
});
