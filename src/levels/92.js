import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "92",
  consonant: "r",
  vowel: "i",
  lessonWords: ["rib", "ridge", "river"],
  activities: [
    {words: ["rug", "rag", "rig"], correctWord: "rig"},
    {words: ["rip", "rope", "raft"], correctWord: "rip", wordsOnly: true},
    {words: ["ram", "rim", "room"], correctWord: "rim", wordsOnly: true},
    {words: ["ribbon", "robin", "rabbit"], correctWord: "ribbon", wordsOnly: true},
    {words: ["wrench", "rush", "rich"], correctWord: "rich", wordsOnly: true},
    {words: ["robber", "river", "ruffle"], correctWord: "river", wordsOnly: true},
    {words: ["reptile", "ripple", "wrapper"], correctWord: "ripple", wordsOnly: true}
  ]
});
