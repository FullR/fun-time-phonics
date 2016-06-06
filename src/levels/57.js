import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "57",
  consonant: "j",
  vowel: "o",
  lessonWords: ["John", "jockey", "jolly"],
  activities: [
    {words: ["jagged", "jug", "jog"], correctWord: "jog"},
    {words: ["Josh", "judge", "juice"], correctWord: "Josh", shortInstructions: true},
    {words: ["Jesse", "jockey", "jacket"], correctWord: "jockey", shortInstructions: true},
    {words: ["jaguar", "jogger", "junkyard"], correctWord: "jogger", shortInstructions: true},
    {words: ["Jonathan", "javelin", "jellyfish"], correctWord: "Jonathan", shortInstructions: true}
  ]
});
