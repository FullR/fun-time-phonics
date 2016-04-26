import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "94",
  consonant: "r",
  vowel: "u",
  lessonWords: ["rub", "run", "rugby"],
  activities: [
    {words: ["rug", "rag", "rig"], correctWord: "rug"},
    {words: ["drum", "wren", "run"], correctWord: "run", wordsOnly: true},
    {words: ["rush", "rash", "rose"], correctWord: "rush", wordsOnly: true},
    {words: ["ring", "rung", "rain"], correctWord: "rung", wordsOnly: true},
    {words: ["rattle", "river", "ruffle"], correctWord: "ruffle", wordsOnly: true},
    {words: ["radish", "rudder", "register"], correctWord: "rudder", wordsOnly: true},
    {words: ["runway", "radio", "trunk"], correctWord: "runway", wordsOnly: true}
  ]
});
