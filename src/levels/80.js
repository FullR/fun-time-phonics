import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "80",
  consonant: "n",
  vowel: "u",
  lessonWords: ["nun", "nudge", "nutmeg"],
  activities: [
    {words: ["knit", "nut", "knot"], correctWord: "nut"},
    {words: ["nun", "nanny", "nine"], correctWord: "nun", wordsOnly: true},
    {words: ["nozzle", "nuzzle", "nipple"], correctWord: "nuzzle", wordsOnly: true},
    {words: ["nickel", "nugget", "nectarine"], correctWord: "nugget", wordsOnly: true},
    {words: ["nutshell", "notch", "nestling"], correctWord: "nutshell", wordsOnly: true},
    {words: ["neighbors", "nibble", "numbers"], correctWord: "numbers", wordsOnly: true},
    {words: ["nectar", "nocturnal", "nutcracker"], correctWord: "nutcracker", wordsOnly: true}
  ]
});
