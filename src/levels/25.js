import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "25",
  consonant: "b",
  vowel: "u",
  lessonWords: ["bud", "bunny", "buffalo"],
  activities: [
    {words: ["bug", "bag", "big"], correctWord: "bug"},
    {words: ["brush", "bus", "dust"], correctWord: "bus", wordsOnly: true},
    {words: ["back", "beak", "buck"], correctWord: "buck", wordsOnly: true},
    {words: ["bent", "bun", "bin"], correctWord: "bun", wordsOnly: true},
    {words: ["butter", "boater", "batter"], correctWord: "butter", wordsOnly: true},
    {words: ["baby", "baboon", "bubble"], correctWord: "bubble", wordsOnly: true},
    {words: ["basket", "bucket", "boxer"], correctWord: "bucket", wordsOnly: true},
    {words: ["button", "bottom", "bedroom"], correctWord: "button", wordsOnly: true},
    {words: ["bonnet", "buckle", "bandage"], correctWord: "buckle", wordsOnly: true},
    {words: ["band", "bomb", "bumper"], correctWord: "bumper", wordsOnly: true}
  ]
});
