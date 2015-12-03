import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 94,
  letter: "r",
  vowel: "u",
  lessonWords: ["rub", "run", "rugby"],
  activityData: [
    {words: ["rug", "rag", "rig"], correct: "rug"},
    {words: ["drum", "wren", "run"], correct: "run", wordsOnly: true},
    {words: ["rush", "rash", "rose"], correct: "rush", wordsOnly: true},
    {words: ["ring", "rung", "rain"], correct: "rung", wordsOnly: true},
    {words: ["rattle", "river", "ruffle"], correct: "ruffle", wordsOnly: true},
    {words: ["radish", "rudder", "register"], correct: "rudder", wordsOnly: true},
    {words: ["runway", "radio", "trunk"], correct: "runway", wordsOnly: true}
  ]
});
