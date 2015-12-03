import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 99,
  letter: "s",
  vowel: "o",
  lessonWords: ["sod", "somber", "solitude"],
  activityData: [
    {words: ["sack", "sick", "sock"], correct: "sock"},
    {words: ["sod", "sad", "suds"], correct: "sod", wordsOnly: true},
    {words: ["shop", "sip", "sob"], correct: "sob", wordsOnly: true},
    {words: ["sieve", "second", "socket"], correct: "socket", wordsOnly: true},
    {words: ["socks", "six", "sax"], correct: "socks", wordsOnly: true},
    {words: ["sucker", "soccer", "secretary"], correct: "soccer", wordsOnly: true},
    {words: ["solids", "salad", "silo"], correct: "solids", wordsOnly: true}
  ]
});
