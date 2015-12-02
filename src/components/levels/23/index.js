import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 23,
  letter: "b",
  vowel: "i",
  lessonWords: ["big", "Bill", "bishop"],
  activityData: [
    {words: ["boat", "bib", "bad"], correct: "bib"},
    {words: ["bud", "bed", "bid"], correct: "bid", wordsOnly: true},
    {words: ["pin", "bit", "bat"], correct: "bit", wordsOnly: true},
    {words: ["bent", "bun", "bin"], correct: "bin", wordsOnly: true},
    {words: ["Bill", "Beth", "Bob"], correct: "Bill", wordsOnly: true},
    {words: ["bikini", "bucket", "basket"], correct: "bikini", wordsOnly: true},
    {words: ["dinner", "bigger", "bench"], correct: "bigger", wordsOnly: true}
  ]
});
