import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "48",
  consonant: "h",
  vowel: "a",
  letterIntroWords: ["hat", "hen", "hit", "hop", "hug"],
  lessonWords: ["half", "halibut", "hatchback"],
  activities: [
    {words: ["hit", "hot", "hat"], correctWord: "hat"},
    {words: ["hatch", "hitch", "hut"], correctWord: "hatch", shortInstructions: true},
    {words: ["hippo", "happy", "hump"], correctWord: "happy", shortInstructions: true},
    {words: ["hive", "half", "hoof"], correctWord: "half", shortInstructions: true},
    {words: ["hatchet", "hotdog", "hexagon"], correctWord: "hatchet", shortInstructions: true},
    {words: ["holly", "helmet", "hammer"], correctWord: "hammer", shortInstructions: true},
    {words: ["handle", "huddle", "hidden"], correctWord: "handle", shortInstructions: true}
  ]
});
