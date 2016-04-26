import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "104",
  consonant: "t",
  vowel: "i",
  lessonWords: ["tip", "Tim", "tinsel"],
  activities: [
    {words: ["tan", "tin", "ten"], correctWord: "tin"},
    {words: ["tip", "trip", "tape"], correctWord: "tip", wordsOnly: true},
    {words: ["trick", "toxic", "ticket"], correctWord: "ticket", wordsOnly: true},
    {words: ["tummy", "timber", "tambourine"], correctWord: "timber", wordsOnly: true},
    {words: ["tickle", "tackle", "toddler"], correctWord: "tickle", wordsOnly: true},
    {words: ["topping", "tiptoe", "tadpole"], correctWord: "tiptoe", wordsOnly: true},
    {words: ["teacher", "treasure", "tissue"], correctWord: "tissue", wordsOnly: true}
  ]
});
