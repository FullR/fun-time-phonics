import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "115",
  consonant: "w",
  vowel: "e",
  lessonWords: ["weather", "website", "wealthy"],
  activities: [
    {words: ["web", "one", "red"], correctWord: "web"},
    {words: ["white", "sweat", "wet"], correctWord: "wet", wordsOnly: true},
    {words: ["wax", "west", "waist"], correctWord: "west", wordsOnly: true},
    {words: ["wheel", "well", "wall"], correctWord: "well", wordsOnly: true},
    {words: ["wedding", "woman", "window"], correctWord: "wedding", wordsOnly: true},
    {words: ["switch", "witch", "wedge"], correctWord: "wedge", wordsOnly: true},
    {words: ["weapon", "wagon", "wishbone"], correctWord: "weapon", wordsOnly: true}
  ]
});
