import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 92,
  letter: "r",
  vowel: "i",
  lessonWords: ["rib", "ridge", "river"],
  activityData: [
    {words: ["rug", "rag", "rig"], correct: "rig"},
    {words: ["rip", "rope", "raft"], correct: "rip", wordsOnly: true},
    {words: ["ram", "rim", "room"], correct: "rim", wordsOnly: true},
    {words: ["ribbon", "robin", "rabbit"], correct: "ribbon", wordsOnly: true},
    {words: ["wrench", "rush", "rich"], correct: "rich", wordsOnly: true},
    {words: ["robber", "river", "ruffle"], correct: "river", wordsOnly: true},
    {words: ["reptile", "ripple", "wrapper"], correct: "ripple", wordsOnly: true}
  ]
});
