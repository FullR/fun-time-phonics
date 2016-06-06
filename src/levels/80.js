import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "80",
  consonant: "n",
  vowel: "u",
  lessonWords: ["nun", "nudge", "nutmeg"],
  activities: [
    {words: ["knit", "nut", "knot"], correctWord: "nut"},
    {words: ["nun", "nanny", "nine"], correctWord: "nun", shortInstructions: true},
    {words: ["nozzle", "nuzzle", "nipple"], correctWord: "nuzzle", shortInstructions: true},
    {words: ["nickel", "nugget", "nectarine"], correctWord: "nugget", shortInstructions: true},
    {words: ["nutshell", "notch", "nestling"], correctWord: "nutshell", shortInstructions: true},
    {words: ["neighbors", "nibble", "numbers"], correctWord: "numbers", shortInstructions: true},
    {words: ["nectar", "nocturnal", "nutcracker"], correctWord: "nutcracker", shortInstructions: true}
  ]
});
