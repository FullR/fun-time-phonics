import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "50",
  consonant: "h",
  vowel: "i",
  lessonWords: ["hiss", "hilly", "hidden"],
  activities: [
    {words: ["hit", "hat", "hut"], correctWord: "hit"},
    {words: ["hop", "hip", "hoop"], correctWord: "hip", wordsOnly: true},
    {words: ["hole", "hall", "hill"], correctWord: "hill", wordsOnly: true},
    {words: ["hatch", "hitch", "hot"], correctWord: "hitch", wordsOnly: true},
    {words: ["hospital", "hippo", "happy"], correctWord: "hippo", wordsOnly: true},
    {words: ["hinge", "hedge", "hand"], correctWord: "hinge", wordsOnly: true},
    {words: ["handle", "huddle", "hidden"], correctWord: "hidden", wordsOnly: true}
  ]
});
