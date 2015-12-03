import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 80,
  letter: "n",
  vowel: "u",
  lessonWords: ["nun", "nudge", "nutmeg"],
  activityData: [
    {words: ["knit", "nut", "knot"], correct: "nut"},
    {words: ["nun", "nanny", "nine"], correct: "nun", wordsOnly: true},
    {words: ["nozzle", "nuzzle", "nipple"], correct: "nuzzle", wordsOnly: true},
    {words: ["nickel", "nugget", "nectarine"], correct: "nugget", wordsOnly: true},
    {words: ["nutshell", "notch", "nestling"], correct: "nutshell", wordsOnly: true},
    {words: ["neighbors", "nibble", "numbers"], correct: "numbers", wordsOnly: true},
    {words: ["nectar", "nocturnal", "nutcracker"], correct: "nutcracker", wordsOnly: true}
  ]
});
