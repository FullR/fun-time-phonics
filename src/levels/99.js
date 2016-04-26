import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "99",
  consonant: "s",
  vowel: "o",
  lessonWords: ["sod", "somber", "solitude"],
  activities: [
    {words: ["sack", "sick", "sock"], correctWord: "sock"},
    {words: ["sod", "sad", "suds"], correctWord: "sod", wordsOnly: true},
    {words: ["shop", "sip", "sob"], correctWord: "sob", wordsOnly: true},
    {words: ["sieve", "second", "socket"], correctWord: "socket", wordsOnly: true},
    {words: ["socks", "six", "sax"], correctWord: "socks", wordsOnly: true},
    {words: ["sucker", "soccer", "secretary"], correctWord: "soccer", wordsOnly: true},
    {words: ["solids", "salad", "silo"], correctWord: "solids", wordsOnly: true}
  ]
});
