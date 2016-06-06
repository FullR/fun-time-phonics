import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "105",
  consonant: "t",
  vowel: "o",
  lessonWords: ["top", "tot", "tonic"],
  activities: [
    {words: ["tub", "top", "tap"], correctWord: "top"},
    {words: ["Tim", "team", "Tom"], correctWord: "Tom", shortInstructions: true},
    {words: ["toxic", "taxi", "tuxedo"], correctWord: "toxic", shortInstructions: true},
    {words: ["tickle", "tackle", "toddler"], correctWord: "toddler", shortInstructions: true},
    {words: ["tennis", "tonsil", "tunnel"], correctWord: "tonsil", shortInstructions: true},
    {words: ["topping", "temple", "tummy"], correctWord: "topping", shortInstructions: true},
    {words: ["telescope", "tomahawk", "tentacle"], correctWord: "tomahawk", shortInstructions: true}
  ]
});
