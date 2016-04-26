import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "23",
  consonant: "b",
  vowel: "i",
  lessonWords: ["big", "Bill", "bishop"],
  activities: [
    {words: ["boat", "bib", "bad"], correctWord: "bib"},
    {words: ["bud", "bed", "bid"], correctWord: "bid", wordsOnly: true},
    {words: ["pin", "bit", "bat"], correctWord: "bit", wordsOnly: true},
    {words: ["bent", "bun", "bin"], correctWord: "bin", wordsOnly: true},
    {words: ["Bill", "Beth", "Bob"], correctWord: "Bill", wordsOnly: true},
    {words: ["bikini", "bucket", "basket"], correctWord: "bikini", wordsOnly: true},
    {words: ["dinner", "bigger", "bench"], correctWord: "bigger", wordsOnly: true}
  ]
});
