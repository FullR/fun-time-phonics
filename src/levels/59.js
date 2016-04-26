import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "59",
  consonant: "j",
  lessonLetters: ["ja", "je", "ji", "jo", "ju"],
  lessonWords: ["jacket", "Jesse", "Jim", "Josh", "jug"],
  activities: [
    {word: "jagged", letters: ["jo", "ga", "ja"], correctLetters: "ja"},
    {word: "juggle", letters: ["gu", "jo", "ju"], correctLetters: "ju", wordsOnly: true},
    {word: "jet", letters: ["ju", "je", "ji"], correctLetters: "je", wordsOnly: true},
    {word: "jockey", letters: ["jo", "ga", "ja"], correctLetters: "jo", wordsOnly: true},
    {word: "jittery", letters: ["je", "gi", "ji"], correctLetters: "ji", wordsOnly: true},
    {word: "jump", letters: ["ju", "jo", "je"], correctLetters: "ju", wordsOnly: true},
    {word: "jester", letters: ["ge", "gi", "je"], correctLetters: "je", wordsOnly: true},
    {word: "jackal", letters: ["je", "ja", "ga"], correctLetters: "ja", wordsOnly: true}
  ]
});
