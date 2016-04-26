import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "103",
  consonant: "t",
  vowel: "e",
  lessonWords: ["Ted", "text", "telephone"],
  activities: [
    {words: ["tan", "tin", "ten"], correctWord: "ten"},
    {words: ["tied", "Ted", "toad"], correctWord: "Ted", wordsOnly: true},
    {words: ["tent", "tongue", "tank"], correctWord: "tent", wordsOnly: true},
    {words: ["tennis", "tonsils", "tissues"], correctWord: "tennis", wordsOnly: true},
    {words: ["topping", "temple", "tunnel"], correctWord: "temple", wordsOnly: true},
    {words: ["tightrope", "telescope", "tapestry"], correctWord: "telescope", wordsOnly: true},
    {words: ["toadstool", "tomahawk", "tentacle"], correctWord: "tentacle", wordsOnly: true}
  ]
});
