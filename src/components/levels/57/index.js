import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 57,
  letter: "j",
  vowel: "o",
  lessonWords: ["John", "jockey", "jolly"],
  activityData: [
    {words: ["jagged", "jug", "jog"], correct: "jog"},
    {words: ["Josh", "judge", "juice"], correct: "Josh", wordsOnly: true},
    {words: ["Jesse", "jockey", "jacket"], correct: "jockey", wordsOnly: true},
    {words: ["jaguar", "jogger", "junkyard"], correct: "jogger", wordsOnly: true},
    {words: ["Jonathan", "javelin", "jellyfish"], correct: "Jonathan", wordsOnly: true}
  ]
});
