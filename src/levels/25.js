import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "25",
  consonant: "b",
  vowel: "u",
  lessonWords: ["bud", "bunny", "buffalo"],
  activities: [
    {words: ["bug", "bag", "big"], correctWord: "bug"},
    {words: ["brush", "bus", "dust"], correctWord: "bus", shortInstructions: true},
    {words: ["back", "beak", "buck"], correctWord: "buck", shortInstructions: true},
    {words: ["bent", "bun", "bin"], correctWord: "bun", shortInstructions: true},
    {words: ["butter", "boater", "batter"], correctWord: "butter", shortInstructions: true},
    {words: ["baby", "baboon", "bubble"], correctWord: "bubble", shortInstructions: true},
    {words: ["basket", "bucket", "boxer"], correctWord: "bucket", shortInstructions: true},
    {words: ["button", "bottom", "bedroom"], correctWord: "button", shortInstructions: true},
    {words: ["bonnet", "buckle", "bandage"], correctWord: "buckle", shortInstructions: true},
    {words: ["band", "bomb", "bumper"], correctWord: "bumper", shortInstructions: true}
  ]
});
