import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "106",
  consonant: "t",
  vowel: "u",
  lessonWords: ["tuck", "tussle", "tumble"],
  activities: [
    {words: ["tub", "top", "tape"], correctWord: "tub"},
    {words: ["tug", "tag", "tiger"], correctWord: "tug", shortInstructions: true},
    {words: ["truck", "tusk", "talk"], correctWord: "tusk", shortInstructions: true},
    {words: ["Tom", "tummy", "timber"], correctWord: "tummy", shortInstructions: true},
    {words: ["tonsil", "trunk", "tunnel"], correctWord: "tunnel", shortInstructions: true},
    {words: ["toxic", "taxi", "tuxedo"], correctWord: "tuxedo", shortInstructions: true},
    {words: ["tugboat", "tiptoe", "teacher"], correctWord: "tugboat", shortInstructions: true}
  ]
});
