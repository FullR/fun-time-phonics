import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  title: "Consonant \"j\" With Short Vowels",
  number: 59,
  lessonLetters: ["ja", "je", "ji", "jo", "ju"],
  lessonWords: ["jacket", "Jesse", "Jim", "Josh", "jug"],
  activityData: [
    {word: "jagged", letters: ["jo", "ga", "ja"], correct: "ja"},
    {word: "juggle", letters: ["gu", "jo", "ju"], correct: "ju", wordsOnly: true},
    {word: "jet", letters: ["ju", "je", "ji"], correct: "je", wordsOnly: true},
    {word: "jockey", letters: ["jo", "ga", "ja"], correct: "jo", wordsOnly: true},
    {word: "jittery", letters: ["je", "gi", "ji"], correct: "ji", wordsOnly: true},
    {word: "jump", letters: ["ju", "jo", "je"], correct: "ju", wordsOnly: true},
    {word: "jester", letters: ["ge", "gi", "je"], correct: "je", wordsOnly: true},
    {word: "jackal", letters: ["je", "ja", "ga"], correct: "ja", wordsOnly: true}
  ]
});
