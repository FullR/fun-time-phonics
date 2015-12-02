import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 25,
  letter: "b",
  vowel: "u",
  lessonWords: ["bud", "bunny", "buffalo"],
  activityData: [
    {words: ["bug", "bag", "big"], correct: "bug"},
    {words: ["brush", "bus", "dust"], correct: "bus", wordsOnly: true},
    {words: ["back", "beak", "buck"], correct: "buck", wordsOnly: true},
    {words: ["bent", "bun", "bin"], correct: "bun", wordsOnly: true},
    {words: ["butter", "boater", "batter"], correct: "butter", wordsOnly: true},
    {words: ["baby", "baboon", "bubble"], correct: "bubble", wordsOnly: true},
    {words: ["basket", "bucket", "boxer"], correct: "bucket", wordsOnly: true},
    {words: ["button", "bottom", "bedroom"], correct: "button", wordsOnly: true},
    {words: ["bonnet", "buckle", "bandage"], correct: "buckle", wordsOnly: true},
    {words: ["band", "bomb", "bumper"], correct: "bumper", wordsOnly: true}
  ]
});
