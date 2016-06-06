import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "94",
  consonant: "r",
  vowel: "u",
  lessonWords: ["rub", "run", "rugby"],
  activities: [
    {words: ["rug", "rag", "rig"], correctWord: "rug"},
    {words: ["drum", "wren", "run"], correctWord: "run", shortInstructions: true},
    {words: ["rush", "rash", "rose"], correctWord: "rush", shortInstructions: true},
    {words: ["ring", "rung", "rain"], correctWord: "rung", shortInstructions: true},
    {words: ["rattle", "river", "ruffle"], correctWord: "ruffle", shortInstructions: true},
    {words: ["radish", "rudder", "register"], correctWord: "rudder", shortInstructions: true},
    {words: ["runway", "radio", "trunk"], correctWord: "runway", shortInstructions: true}
  ]
});
