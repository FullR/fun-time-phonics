import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "59",
  consonant: "j",
  lessonLetters: ["ja", "je", "ji", "jo", "ju"],
  lessonWords: ["jacket", "Jesse", "Jim", "Josh", "jug"],
  activities: [
    {word: "jagged", letters: ["jo", "ga", "ja"], correctLetters: "ja"},
    {word: "juggle", letters: ["gu", "jo", "ju"], correctLetters: "ju", shortInstructions: true},
    {word: "jet", letters: ["ju", "je", "ji"], correctLetters: "je", shortInstructions: true},
    {word: "jockey", letters: ["jo", "ga", "ja"], correctLetters: "jo", shortInstructions: true},
    {word: "jittery", letters: ["je", "gi", "ji"], correctLetters: "ji", shortInstructions: true},
    {word: "jump", letters: ["ju", "jo", "je"], correctLetters: "ju", shortInstructions: true},
    {word: "jester", letters: ["ge", "gi", "je"], correctLetters: "je", shortInstructions: true},
    {word: "jackal", letters: ["je", "ja", "ga"], correctLetters: "ja", shortInstructions: true}
  ]
});
