import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 103,
  letter: "t",
  vowel: "e",
  lessonWords: ["Ted", "text", "telephone"],
  activityData: [
    {words: ["tan", "tin", "ten"], correct: "ten"},
    {words: ["tied", "Ted", "toad"], correct: "Ted", wordsOnly: true},
    {words: ["tent", "tongue", "tank"], correct: "tent", wordsOnly: true},
    {words: ["tennis", "tonsils", "tissues"], correct: "tennis", wordsOnly: true},
    {words: ["topping", "temple", "tunnel"], correct: "temple", wordsOnly: true},
    {words: ["tightrope", "telescope", "tapestry"], correct: "telescope", wordsOnly: true},
    {words: ["toadstool", "tomahawk", "tentacle"], correct: "tentacle", wordsOnly: true}
  ]
});
