import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "105",
  consonant: "t",
  vowel: "o",
  lessonWords: ["top", "tot", "tonic"],
  activities: [
    {words: ["tub", "top", "tap"], correctWord: "top"},
    {words: ["Tim", "team", "Tom"], correctWord: "Top", wordsOnly: true},
    {words: ["toxic", "taxi", "tuxedo"], correctWord: "toxic", wordsOnly: true},
    {words: ["tickle", "tackle", "toddler"], correctWord: "toddler", wordsOnly: true},
    {words: ["tennis", "tonsil", "tunnel"], correctWord: "tonsil", wordsOnly: true},
    {words: ["topping", "temple", "tummy"], correctWord: "topping", wordsOnly: true},
    {words: ["telescope", "tomahawk", "tentacle"], correctWord: "tomahawk", wordsOnly: true}
  ]
});
