import consonantVowelReview from "components/levels/consonant-vowel-review";

export default consonantVowelReview({
  letter: "n",
  number: 81,
  lessonLetters: ["na", "ne", "ni", "no", "nu"],
  lessonWords: ["nap", "neck", "Nick", "notch", "nun"],
  activityData: [
    {word: "net", letters: ["na", "nu", "ne"], correct: "ne"},
    {word: "nozzle", letters: ["nu", "no", "mo"], correct: "no", wordsOnly: true},
    {word: "nun", letters: ["nu", "no", "ni"], correct: "nu", wordsOnly: true},
    {word: "nab", letters: ["ma", "na", "ne"], correct: "na", wordsOnly: true},
    {word: "nickel", letters: ["mi", "me", "ni"], correct: "ni", wordsOnly: true},
    {word: "nest", letters: ["ne", "ni", "no"], correct: "ne", wordsOnly: true},
    {word: "nugget", letters: ["no", "nu", "na"], correct: "nu", wordsOnly: true},
    {word: "nocturnal", letters: ["no", "na", "nu"], correct: "no", wordsOnly: true}
  ]
});
