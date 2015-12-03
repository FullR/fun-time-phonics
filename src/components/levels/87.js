import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  letter: "p",
  number: 87,
  lessonLetters: ["pa", "pe", "pi", "po", "pu"],
  lessonWords: ["pack", "pen", "pig", "pop", "puck"],
  activityData: [
    {word: "pet", letters: ["pi", "pe", "pa"], correct: "pe"},
    {word: "pocket", letters: ["pu", "pe", "po"], correct: "po", wordsOnly: true},
    {word: "pickle", letters: ["po", "pi", "pe"], correct: "pi", wordsOnly: true},
    {word: "path", letters: ["pa", "pe", "po"], correct: "pa", wordsOnly: true},
    {word: "puddle", letters: ["pa", "pe", "pu"], correct: "pu", wordsOnly: true},
    {word: "pedal", letters: ["pu", "pe", "pi"], correct: "pe", wordsOnly: true},
    {word: "paddle", letters: ["po", "pu", "pa"], correct: "pa", wordsOnly: true},
    {word: "pitch", letters: ["pu", "pi", "pe"], correct: "pi", wordsOnly: true},
    {word: "puppy", letters: ["pu", "po", "pa"], correct: "pu", wordsOnly: true},
    {word: "popcorn", letters: ["po", "pu", "pi"], correct: "po", wordsOnly: true}
  ]
});
