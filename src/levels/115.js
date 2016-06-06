import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "115",
  consonant: "w",
  vowel: "e",
  lessonWords: ["weather", "website", "wealthy"],
  activities: [
    {words: ["web", "one", "red"], correctWord: "web"},
    {words: ["white", "sweat", "wet"], correctWord: "wet", shortInstructions: true},
    {words: ["wax", "west", "waist"], correctWord: "west", shortInstructions: true},
    {words: ["wheel", "well", "wall"], correctWord: "well", shortInstructions: true},
    {words: ["wedding", "woman", "window"], correctWord: "wedding", shortInstructions: true},
    {words: ["switch", "witch", "wedge"], correctWord: "wedge", shortInstructions: true},
    {words: ["weapon", "wagon", "wishbone"], correctWord: "weapon", shortInstructions: true}
  ]
});
