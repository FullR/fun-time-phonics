import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "92",
  consonant: "r",
  vowel: "i",
  lessonWords: ["rib", "ridge", "river"],
  activities: [
    {words: ["rug", "rag", "rig"], correctWord: "rig"},
    {words: ["rip", "rope", "raft"], correctWord: "rip", shortInstructions: true},
    {words: ["ram", "rim", "room"], correctWord: "rim", shortInstructions: true},
    {words: ["ribbon", "robin", "rabbit"], correctWord: "ribbon", shortInstructions: true},
    {words: ["wrench", "rush", "rich"], correctWord: "rich", shortInstructions: true},
    {words: ["robber", "river", "ruffle"], correctWord: "river", shortInstructions: true},
    {words: ["reptile", "ripple", "wrapper"], correctWord: "ripple", shortInstructions: true}
  ]
});
