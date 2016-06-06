import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "99",
  consonant: "s",
  vowel: "o",
  lessonWords: ["sod", "somber", "solitude"],
  activities: [
    {words: ["sack", "sick", "sock"], correctWord: "sock"},
    {words: ["sod", "sad", "suds"], correctWord: "sod", shortInstructions: true},
    {words: ["shop", "sip", "sob"], correctWord: "sob", shortInstructions: true},
    {words: ["sieve", "second", "socket"], correctWord: "socket", shortInstructions: true},
    {words: ["socks", "six", "sax"], correctWord: "socks", shortInstructions: true},
    {words: ["sucker", "soccer", "secretary"], correctWord: "soccer", shortInstructions: true},
    {words: ["solids", "salad", "silo"], correctWord: "solids", shortInstructions: true}
  ]
});
