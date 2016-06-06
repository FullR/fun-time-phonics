import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "104",
  consonant: "t",
  vowel: "i",
  lessonWords: ["tip", "Tim", "tinsel"],
  activities: [
    {words: ["tan", "tin", "ten"], correctWord: "tin"},
    {words: ["tip", "trip", "tape"], correctWord: "tip", shortInstructions: true},
    {words: ["trick", "toxic", "ticket"], correctWord: "ticket", shortInstructions: true},
    {words: ["tummy", "timber", "tambourine"], correctWord: "timber", shortInstructions: true},
    {words: ["tickle", "tackle", "toddler"], correctWord: "tickle", shortInstructions: true},
    {words: ["topping", "tiptoe", "tadpole"], correctWord: "tiptoe", shortInstructions: true},
    {words: ["teacher", "treasure", "tissue"], correctWord: "tissue", shortInstructions: true}
  ]
});
