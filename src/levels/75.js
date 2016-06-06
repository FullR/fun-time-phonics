import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "75",
  consonant: "m",
  lessonLetters: ["ma", "me", "mi", "mo", "mu"],
  lessonWords: ["map", "mesh", "mitt", "mom", "mug"],
  activities: [
    {word: "mop", letters: ["mo", "mu", "ma"], correctLetters: "mo"},
    {word: "mask", letters: ["me", "ma", "mu"], correctLetters: "ma", shortInstructions: true},
    {word: "mitten", letters: ["ma", "mi", "me"], correctLetters: "mi", shortInstructions: true},
    {word: "mummy", letters: ["me", "mo", "mu"], correctLetters: "mu", shortInstructions: true},
    {word: "medal", letters: ["mo", "mi", "me"], correctLetters: "me", shortInstructions: true},
    {word: "monster", letters: ["mu", "mo", "ma"], correctLetters: "mo", shortInstructions: true},
    {word: "melon", letters: ["ma", "me", "mi"], correctLetters: "me", shortInstructions: true},
    {word: "magic", letters: ["ma", "me", "mi"], correctLetters: "ma", shortInstructions: true},
    {word: "middle", letters: ["mi", "me", "mo"], correctLetters: "mi", shortInstructions: true},
    {word: "muffin", letters: ["mo", "mi", "mu"], correctLetters: "mu", shortInstructions: true}
  ]
});
