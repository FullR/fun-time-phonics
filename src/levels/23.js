import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "23",
  consonant: "b",
  vowel: "i",
  lessonWords: ["big", "Bill", "bishop"],
  activities: [
    {words: ["boat", "bib", "bad"], correctWord: "bib"},
    {words: ["bud", "bed", "bid"], correctWord: "bid", shortInstructions: true},
    {words: ["pin", "bit", "bat"], correctWord: "bit", shortInstructions: true},
    {words: ["bent", "bun", "bin"], correctWord: "bin", shortInstructions: true},
    {words: ["Bill", "Beth", "Bob"], correctWord: "Bill", shortInstructions: true},
    {words: ["bikini", "bucket", "basket"], correctWord: "bikini", shortInstructions: true},
    {words: ["dinner", "bigger", "bench"], correctWord: "bigger", shortInstructions: true}
  ]
});
