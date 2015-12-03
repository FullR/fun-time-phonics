import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 115,
  letter: "w",
  vowel: "e",
  lessonWords: ["weather", "website", "wealthy"],
  activityData: [
    {words: ["web", "one", "red"], correct: "web"},
    {words: ["white", "sweat", "wet"], correct: "wet", wordsOnly: true},
    {words: ["wax", "west", "waist"], correct: "west", wordsOnly: true},
    {words: ["wheel", "well", "wall"], correct: "well", wordsOnly: true},
    {words: ["wedding", "woman", "window"], correct: "wedding", wordsOnly: true},
    {words: ["switch", "witch", "wedge"], correct: "wedge", wordsOnly: true},
    {words: ["weapon", "wagon", "wishbone"], correct: "weapon", wordsOnly: true}
  ]
});
