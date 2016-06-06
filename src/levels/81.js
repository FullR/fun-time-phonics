import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "81",
  consonant: "n",
  lessonLetters: ["na", "ne", "ni", "no", "nu"],
  lessonWords: ["nap", "neck", "Nick", "notch", "nun"],
  activities: [
    {word: "net", letters: ["na", "nu", "ne"], correctLetters: "ne"},
    {word: "nozzle", letters: ["nu", "no", "na"], correctLetters: "no", shortInstructions: true},
    {word: "nun", letters: ["nu", "no", "ni"], correctLetters: "nu", shortInstructions: true},
    {word: "nab", letters: ["no", "na", "ne"], correctLetters: "na", shortInstructions: true},
    {word: "nickel", letters: ["nu", "ne", "ni"], correctLetters: "ni", shortInstructions: true},
    {word: "nest", letters: ["ne", "ni", "no"], correctLetters: "ne", shortInstructions: true},
    {word: "nugget", letters: ["no", "nu", "na"], correctLetters: "nu", shortInstructions: true},
    {word: "nocturnal", letters: ["no", "na", "nu"], correctLetters: "no", shortInstructions: true}
  ]
});
