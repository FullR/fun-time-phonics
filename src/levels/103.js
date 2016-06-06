import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "103",
  consonant: "t",
  vowel: "e",
  lessonWords: ["Ted", "text", "telephone"],
  activities: [
    {words: ["tan", "tin", "ten"], correctWord: "ten"},
    {words: ["tied", "Ted", "toad"], correctWord: "Ted", shortInstructions: true},
    {words: ["tent", "tongue", "tank"], correctWord: "tent", shortInstructions: true},
    {words: ["tennis", "tonsils", "tissues"], correctWord: "tennis", shortInstructions: true},
    {words: ["topping", "temple", "tunnel"], correctWord: "temple", shortInstructions: true},
    {words: ["tightrope", "telescope", "tapestry"], correctWord: "telescope", shortInstructions: true},
    {words: ["toadstool", "tomahawk", "tentacle"], correctWord: "tentacle", shortInstructions: true}
  ]
});
