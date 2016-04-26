import consonantVowelReview from "levels/consonant-vowel-review-level";

export default consonantVowelReview({
  id: "81",
  consonant: "n",
  lessonLetters: ["na", "ne", "ni", "no", "nu"],
  lessonWords: ["nap", "neck", "Nick", "notch", "nun"],
  activities: [
    {word: "net", letters: ["na", "nu", "ne"], correctLetters: "ne"},
    {word: "nozzle", letters: ["nu", "no", "mo"], correctLetters: "no", wordsOnly: true},
    {word: "nun", letters: ["nu", "no", "ni"], correctLetters: "nu", wordsOnly: true},
    {word: "nab", letters: ["ma", "na", "ne"], correctLetters: "na", wordsOnly: true},
    {word: "nickel", letters: ["mi", "me", "ni"], correctLetters: "ni", wordsOnly: true},
    {word: "nest", letters: ["ne", "ni", "no"], correctLetters: "ne", wordsOnly: true},
    {word: "nugget", letters: ["no", "nu", "na"], correctLetters: "nu", wordsOnly: true},
    {word: "nocturnal", letters: ["no", "na", "nu"], correctLetters: "no", wordsOnly: true}
  ]
});
