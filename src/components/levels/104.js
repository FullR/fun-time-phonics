import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 104,
  letter: "t",
  vowel: "i",
  lessonWords: ["tip", "Tim", "tinsel"],
  activityData: [
    {words: ["tan", "tin", "ten"], correct: "tin"},
    {words: ["tip", "trip", "tape"], correct: "tip", wordsOnly: true},
    {words: ["trick", "toxic", "ticket"], correct: "ticket", wordsOnly: true},
    {words: ["tummy", "timber", "tambourine"], correct: "timber", wordsOnly: true},
    {words: ["tickle", "tackle", "toddler"], correct: "tickle", wordsOnly: true},
    {words: ["topping", "tiptoe", "tadpole"], correct: "tiptoe", wordsOnly: true},
    {words: ["teacher", "treasure", "tissue"], correct: "tissue", wordsOnly: true}
  ]
});
