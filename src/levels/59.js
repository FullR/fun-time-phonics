import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "59",
  consonant: "j",
  lessonLetters: ["ja", "je", "ji", "jo", "ju"],
  lessonWords: ["jacket", "Jesse", "Jim", "Josh", "jug"],
  activities: [
    {word: "jagged", letters: ["jo","je","ja"], correctLetters: "ja"},
    {word: "juggle", letters: ["ja","jo","ju"], correctLetters: "ju", shortInstructions: true},
    {word: "jet", letters: ["ju","je","ji"], correctLetters: "je", shortInstructions: true},
    {word: "jockey", letters: ["jo","ju","ja"], correctLetters: "jo", shortInstructions: true},
    {word: "jittery", letters: ["je","ja","ji"], correctLetters: "ji", shortInstructions: true},
    {word: "jump", letters: ["ju","jo","je"], correctLetters: "ju", shortInstructions: true},
    {word: "jester", letters: ["ja","ji","je"], correctLetters: "je", shortInstructions: true},
    {word: "jackal", letters: ["je","ja","jo"], correctLetters: "ja", shortInstructions: true}
  ]
});
