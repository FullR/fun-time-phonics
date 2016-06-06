import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "50",
  consonant: "h",
  vowel: "i",
  lessonWords: ["hiss", "hilly", "hidden"],
  activities: [
    {words: ["hit", "hat", "hut"], correctWord: "hit"},
    {words: ["hop", "hip", "hoop"], correctWord: "hip", shortInstructions: true},
    {words: ["hole", "hall", "hill"], correctWord: "hill", shortInstructions: true},
    {words: ["hatch", "hitch", "hot"], correctWord: "hitch", shortInstructions: true},
    {words: ["hospital", "hippo", "happy"], correctWord: "hippo", shortInstructions: true},
    {words: ["hinge", "hedge", "hand"], correctWord: "hinge", shortInstructions: true},
    {words: ["handle", "huddle", "hidden"], correctWord: "hidden", shortInstructions: true}
  ]
});
