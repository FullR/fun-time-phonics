import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "106",
  consonant: "t",
  vowel: "u",
  lessonWords: ["tuck", "tussle", "tumble"],
  activities: [
    {words: ["tub", "top", "tape"], correctWord: "tub"},
    {words: ["tug", "tag", "tiger"], correctWord: "tug", wordsOnly: true},
    {words: ["truck", "tusk", "talk"], correctWord: "tusk", wordsOnly: true},
    {words: ["Tom", "tummy", "timber"], correctWord: "tummy", wordsOnly: true},
    {words: ["tonsil", "trunk", "tunnel"], correctWord: "tunnel", wordsOnly: true},
    {words: ["toxic", "taxi", "tuxedo"], correctWord: "tuxedo", wordsOnly: true},
    {words: ["tugboat", "tiptoe", "teacher"], correctWord: "tugboat", wordsOnly: true}
  ]
});
