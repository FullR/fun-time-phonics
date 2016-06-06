import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "87",
  consonant: "p",
  lessonLetters: ["pa", "pe", "pi", "po", "pu"],
  lessonWords: ["pack", "pen", "pig", "pop", "puck"],
  activities: [
    {word: "pet", letters: ["pi", "pe", "pa"], correctLetters: "pe"},
    {word: "pocket", letters: ["pu", "pe", "po"], correctLetters: "po", shortInstructions: true},
    {word: "pickle", letters: ["po", "pi", "pe"], correctLetters: "pi", shortInstructions: true},
    {word: "path", letters: ["pa", "pe", "po"], correctLetters: "pa", shortInstructions: true},
    {word: "puddle", letters: ["pa", "pe", "pu"], correctLetters: "pu", shortInstructions: true},
    {word: "pedal", letters: ["pu", "pe", "pi"], correctLetters: "pe", shortInstructions: true},
    {word: "paddle", letters: ["po", "pu", "pa"], correctLetters: "pa", shortInstructions: true},
    {word: "pitch", letters: ["pu", "pi", "pe"], correctLetters: "pi", shortInstructions: true},
    {word: "puppy", letters: ["pu", "po", "pa"], correctLetters: "pu", shortInstructions: true},
    {word: "popcorn", letters: ["po", "pu", "pi"], correctLetters: "po", shortInstructions: true}
  ]
});
